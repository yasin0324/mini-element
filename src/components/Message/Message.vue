<template>
  <div
    class="me-message"
    v-show="visible"
    :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
    role="alert"
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
import type { MessageProps } from "./type";
import RenderVnode from "../Common/RenderVnode";
import Icon from "../Icon/Icon.vue";
import { onMounted, ref } from "vue";

defineOptions({
  name: "meMessage",
});

const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
});

const visible = ref(false);
function startTimer() {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
onMounted(() => {
  visible.value = true;
  startTimer();
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
