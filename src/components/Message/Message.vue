<template>
  <div
    class="me-message"
    v-show="visible"
    :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
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
</template>

<script setup lang="ts">
import type { MessageProps } from "./types";
import RenderVnode from "../Common/RenderVnode";
import Icon from "../Icon/Icon.vue";
import { getLastBottomOffset } from "./method";
import { onMounted, ref, watch, computed, nextTick } from "vue";
import useEventListener from "@/hooks/useEventListener";

defineOptions({
  name: "meMessage",
});

const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
  offset: 20,
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
onMounted(async () => {
  visible.value = true;
  startTimer();
  await nextTick();
  height.value = messageRef.value!.getBoundingClientRect().height;
});
function keydown(e: Event) {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
}
useEventListener(document, "keydown", keydown);
watch(visible, (newValue) => {
  if (!newValue) {
    props.onDestory();
  }
});
defineExpose({
  bottomOffset,
  visible,
});
</script>

<style>
.me-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  border: 1px solid blue;
}
</style>
