<template>
  <div
    class="me-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="state.mouseHover = true"
    @mouseleave="state.mouseHover = false"
  >
    <Tooltip
      placement="bottom-start"
      manual
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-outside="controlDropdown(false)"
    >
      <Input
        v-model="state.inputValue"
        ref="inputRef"
        :placeholder="filteredPlaceholder"
        :disabled="disabled"
        :readonly="!filterable || !isDropdownShow"
        @input="onFilter"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="me-input__clear"
            @click.stop="clear"
            @mousedown.prevent="NOOP"
          />
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          />
        </template>
      </Input>
      <template #content>
        <div class="me-select__loading" v-if="state.loading">
          <Icon icon="spinner" spin />
        </div>
        <div class="me-select__nodata" v-else-if="filterable && !filterOptions.length">
          no matching data
        </div>
        <ul class="me-select__menu">
          <template v-for="(item, index) in filterOptions" :key="index">
            <li
              class="me-select__menu-item"
              :class="{
                'is-selected': state.selectedOption?.value === item.value,
                'is-disabled': item.disabled,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemClick(item)"
            >
              <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import Input from "../Input/Input.vue";
import { type InputInstance } from "../Input/types";
import Tooltip from "../Tooltip/Tooltip.vue";
import { type TooltipInstance } from "../Tooltip/types";
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from "./types";
import Icon from "../Icon/Icon.vue";
import RenderVnode from "../Common/RenderVnode";
import { isFunction } from "lodash-es";

defineOptions({
  name: "meSelect",
});

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
});
const emits = defineEmits<SelectEmits>();

// 菜单是否打开
const isDropdownShow = ref(false);
const tooltipRef = ref<TooltipInstance | null>(null);
const inputRef = ref<InputInstance | null>(null);

// 根据modelValue找到初始的option
const initialOption = computed(() => {
  const option = props.options.find((option) => option.value === props.modelValue);
  return option || null;
});

// input的值和选中的option
const state: SelectStates = reactive({
  inputValue: initialOption.value?.label || "",
  selectedOption: initialOption.value,
  mouseHover: false,
  loading: false,
});

// 展示清除anniu
const showClearIcon = computed(
  () => props.clearable && state.mouseHover && state.selectedOption && state.inputValue.trim()
);

// popper设置
const popperOptions: any = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    },
  ],
};

// placeholder
// filter模式下的placeholder为选中的label
const filteredPlaceholder = computed(() =>
  props.filterable && state.selectedOption && isDropdownShow.value
    ? state.selectedOption.label
    : props.placeholder
);

// 菜单项
const filterOptions = ref(props.options);
// 根据输入框的值筛选
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) {
    return;
  }
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(searchValue);
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    state.loading = true;
    try {
      filterOptions.value = await props.remoteMethod(searchValue);
    } catch (error) {
      console.log(error);
      filterOptions.value = [];
    } finally {
      state.loading = false;
    }
  } else {
    filterOptions.value = props.options.filter((option) => option.label.includes(searchValue));
  }
};
const onFilter = () => {
  generateFilterOptions(state.inputValue);
};

const controlDropdown = (show: boolean) => {
  if (show) {
    // filter模式下之前选择过对应的值每次点击都会重置
    if (props.filterable && state.selectedOption) {
      state.inputValue = "";
    }
    if (props.filterable) {
      generateFilterOptions(state.inputValue);
    }
    tooltipRef.value?.show();
  } else {
    if (props.filterable) {
      state.inputValue = state.selectedOption ? state.selectedOption.label : "";
    }
    tooltipRef.value?.hide();
  }
  isDropdownShow.value = show;
  emits("visible-change", show);
};

// 点击展示/隐藏
const toggleDropdown = () => {
  if (props.disabled) {
    return;
  }
  if (isDropdownShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};

// 点击菜单项
const itemClick = (item: SelectOption) => {
  if (item.disabled) {
    return;
  }
  state.inputValue = item.label;
  state.selectedOption = item;
  emits("change", item.value);
  emits("update:modelValue", item.value);
  controlDropdown(false);
  inputRef.value?.ref?.focus();
};

// 清空
const clear = () => {
  state.inputValue = "";
  state.selectedOption = null;
  emits("change", "");
  emits("update:modelValue", "");
  emits("clear");
};
const NOOP = () => {};

watch(
  () => props.options,
  (newVal) => {
    filterOptions.value = newVal;
  }
);
</script>
