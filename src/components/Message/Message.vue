<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="me-message"
      v-show="visible"
      :class="{ [`me-message--${type}`]: type, 'is-close': showClose }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="me-message__content">
        <slot>
          <RenderVnode v-if="message" :v-node="message"></RenderVnode>
        </slot>
      </div>
      <div class="me-message__close" v-if="showClose">
        <Icon @click.stop="visible = false" icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { MessageProps } from "./types";
import RenderVnode from "../Common/RenderVnode";
import Icon from "../Icon/Icon.vue";
import { getLastBottomOffset } from "./method";
import { onMounted, ref, computed } from "vue";
import useEventListener from "@/hooks/useEventListener";

defineOptions({
  name: "meMessage",
});

const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
  offset: 20,
  transitionName: "fade-up",
});

// 是否显示
const visible = ref(false);

// 每个Message组件的位置top等于上一个组件的bottom+offset
// 每个Message组件的位置bottom等于该组件的top+height
const messageRef = ref<HTMLElement | null>(null);
// 高度
const height = ref(0);
// 上一个实例的bottom，第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id));
// 该元素的top
const topOffset = computed(() => lastOffset.value + props.offset);
// 该元素的bottom
const bottomOffset = computed(() => topOffset.value + height.value);
const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex,
}));
let timer: any;
function startTimer() {
  if (props.duration === 0) return;
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
function clearTimer() {
  clearTimeout(timer);
}
onMounted(() => {
  visible.value = true;
  startTimer();
});
function keydown(e: Event) {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
}
useEventListener(document, "keydown", keydown);

const destroyComponent = () => {
  props.ondestroy();
};

const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
};

defineExpose({
  bottomOffset,
  visible,
});
</script>
