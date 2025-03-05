<template>
  <div class="me-dropdown"></div>
  <Tooltip
    :trigger="trigger"
    :placement="placement"
    :popper-options="popperOptions"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    @visible-change="visibleChange"
    ref="tooltipRef"
  >
    <slot />
    <template #content>
      <ul class="me-dropdown__menu">
        <template v-for="item in menuOptions" :key="item.key">
          <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
          <li
            class="me-dropdown__item"
            :class="{ 'is-disable': item.disable, 'is-divided': item.divided }"
            :id="`dropdown-item-${item.key}`"
            @click="itemClick(item)"
          >
            {{ item.label }}
          </li>
        </template>
      </ul>
    </template>
  </Tooltip>
</template>

<script setup lang="ts">
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from "./type";
import Tooltip from "../Tooltip/Tooltip.vue";
import type { TooltipInstance } from "../Tooltip/type";
import { ref, type Ref } from "vue";

defineOptions({
  name: "meDropdown",
});

const props = defineProps<DropdownProps>();
const emits = defineEmits<DropdownEmits>();

const tooltipRef = ref() as Ref<TooltipInstance>;

const visibleChange = (e: boolean) => {
  emits("visible-change", e);
};

const itemClick = (e: MenuOption) => {
  if (e.disable) {
    return;
  }
  emits("select", e);
};
defineExpose<DropdownInstance>({
  show: tooltipRef.value?.show,
  hide: tooltipRef.value?.hide,
});
</script>
