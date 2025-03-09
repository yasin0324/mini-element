<template>
  <div class="me-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="me-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="me-tooltip__popper" ref="popperNode">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types";
import { createPopper, type Instance } from "@popperjs/core";
import { ref, watch, reactive, onUnmounted, computed } from "vue";
import { debounce } from "lodash-es";
import useClickOutside from "@/hooks/useClickOutside";

defineOptions({
  name: "meTooltip",
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
  transition: "fade",
  openDelay: 0,
  closeDelay: 0,
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

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  };
});

const open = () => {
  isOpen.value = true;
  emits("visible-change", isOpen.value);
};

const close = () => {
  isOpen.value = false;
  emits("visible-change", isOpen.value);
};

const openDebounce = debounce(open, props.openDelay);
const closeDebounce = debounce(close, props.closeDelay);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};

const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};

useClickOutside(popperContainerNode, () => {
  if (props.trigger === "click" && isOpen.value === true && !props.manual) {
    closeFinal();
  }
});

const attachEvents = () => {
  if (props.trigger === "hover") {
    events["mouseenter"] = openFinal;
    outerEvents["mouseleave"] = closeFinal;
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
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value);
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
  show: openFinal,
  hide: closeFinal,
});
</script>
