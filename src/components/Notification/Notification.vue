<template>
  <Transition name="me-notification-fade" @enter="updateHeight" @after-leave="destoryComponent">
    <div
      class="me-notification"
      :class="{
        [`me-notification--${type}`]: type,
        'is-close': showClose,
      }"
      v-show="visible"
      role="alert"
      :style="cssStyle"
      ref="notificationRef"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <Icon class="me-notification__icon" :icon="iconName" />
      <div class="me-notification__text">
        <div class="notification__title">{{ title }}</div>
        <div class="me-notification__content">
          <RenderVnode :v-node="message" />
        </div>
      </div>
      <div class="me-notification__close" v-if="showClose">
        <Icon icon="xmark" @click.stop="visible = false" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Icon from "../Icon/Icon.vue";
import RenderVnode from "../Common/RenderVnode";
import type { NotificationProps } from "./types";
import useEventListener from "@/hooks/useEventListener";
import { getLastBottomOffset } from "./method";

defineOptions({
  name: "meNotification",
});

const props = withDefaults(defineProps<NotificationProps>(), {
  type: "info",
  duration: 3000,
  offset: 20,
  showClose: true,
});

const iconName = computed(() => {
  if (props.icon) {
    return props.icon;
  }
  switch (props.type) {
    case "info":
      return "circle-info";
    case "warning":
      return "circle-exclamation";
    case "danger":
      return "circle-xmark";
    case "success":
      return "circle-check";
    default:
      return "circle-info";
  }
});

const visible = ref(false);

let timer: any;
const startTimer = () => {
  if (props.duration === 0) {
    return;
  }
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
};
const clearTimer = () => {
  clearTimeout(timer);
};
const keydown = (e: Event) => {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
};
useEventListener(document, "keydown", keydown);

const notificationRef = ref<HTMLDivElement | null>(null);
const height = ref(0);
const lastOffset = computed(() => getLastBottomOffset(props.id));
const topOffset = computed(() => lastOffset.value + props.offset);
const bottomOffset = computed(() => topOffset.value + height.value);
const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex,
}));

const updateHeight = () => {
  height.value = notificationRef.value!.getBoundingClientRect().height;
};

const destoryComponent = () => {
  props.onDestroy();
};

onMounted(() => {
  visible.value = true;
  startTimer();
});

defineExpose({
  bottomOffset,
  visible,
});
</script>
