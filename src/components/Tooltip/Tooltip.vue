<template>
  <div class="me-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="me-tooltip__trigger" ref="triggerNode" v-on="events">
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
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./type";
import { createPopper, type Instance } from "@popperjs/core";
import { ref, watch, reactive, onUnmounted } from "vue";
import useClickOutside from "@/hooks/useClickOutside";

defineOptions({
  name: "meTooltip",
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
});
const emits = defineEmits<TooltipEmits>();
// 内容区域是否展示
const isOpen = ref(false);
// 点击节点
const triggerNode = ref<HTMLElement | null>(null);
// 内容节点
const popperNode = ref<HTMLElement | null>(null);
// 容器节点
const popperContainerNode = ref<HTMLElement | null>(null);

// popper实例
let popperInstance: null | Instance = null;
let events: Record<string, any> = reactive({});
let outerEvents: Record<string, any> = reactive({});

const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits("visible-change", isOpen.value);
};

const open = () => {
  isOpen.value = true;
  emits("visible-change", isOpen.value);
};

const close = () => {
  isOpen.value = false;
  emits("visible-change", isOpen.value);
};

useClickOutside(popperContainerNode, () => {
  if (props.trigger === "click" && isOpen.value === true && !props.manual) {
    close();
  }
});

const attachEvents = () => {
  if (props.trigger === "hover") {
    events["mouseenter"] = open;
    outerEvents["mouseleave"] = close;
  } else if (props.trigger === "click") {
    events["click"] = togglePopper;
  }
};
if (!props.manual) {
  attachEvents();
}

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {};
      outerEvents = {};
    } else {
      attachEvents();
    }
  }
);

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // 事件清空
      events = {};
      outerEvents = {};
      attachEvents();
    }
  }
);

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

onUnmounted(() => {
  popperInstance?.destroy();
});

defineExpose<TooltipInstance>({
  show: open,
  hide: close,
});
</script>
