<template>
  <div class="me-tooltip">
    <div class="me-tooltip__trigger" ref="triggerNode" @click="togglePopper">
      <slot />
    </div>
    <div v-if="isOpen" class="me-tooltip__popper" ref="popperNode">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipEmits } from "./type";
import { createPopper, type Instance } from "@popperjs/core";
import { ref, watch } from "vue";

defineOptions({
  name: "meTooltip",
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
});
const emits = defineEmits<TooltipEmits>();
// 内容区域是否展示
const isOpen = ref(false);
// 点击节点
const triggerNode = ref<HTMLElement | null>(null);
// 内容节点
const popperNode = ref<HTMLElement | null>(null);

// popper实例
let popperInstance: null | Instance = null;

const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits("visible-change", isOpen.value);
};

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        });
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: "post" }
);
</script>
