<template>
  <div class="me-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
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
        :placeholder="placeholder"
        :disabled="disabled"
      >
        <template #suffix>
          <Icon icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }" />
        </template>
      </Input>
      <template #content>
        <ul class="me-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="me-select__menu-item"
              :class="{
                'is-selected': state.selectedOption?.value === item.value,
                'is-disabled': item.disabled,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemClick(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import Input from "../Input/Input.vue";
import { type InputInstance } from "../Input/type";
import Tooltip from "../Tooltip/Tooltip.vue";
import { type TooltipInstance } from "../Tooltip/types";
import type { SelectProps, SelectEmits, SelectOption, SelectState } from "./types";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "meSelect",
});

const props = defineProps<SelectProps>();
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
const state: SelectState = reactive({
  inputValue: initialOption.value?.label || "",
  selectedOption: initialOption.value,
});

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

const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value?.show();
  } else {
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
</script>
