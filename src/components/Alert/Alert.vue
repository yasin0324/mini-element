<template>
  <Transition>
    <div
      class="me-alert"
      :class="{
        [`me-alert--${type}`]: type,
        [`me-alert--${effect}`]: effect,
      }"
      v-if="alertShow"
    >
      <div class="me-alert__content">
        <span><slot /></span>
      </div>
      <div class="me-alert__close" v-if="closable" @click="closeAlert">
        <Icon icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";
import type { AlertProps, AlertEmits } from "./types";

defineOptions({
  name: "meAlert",
});

withDefaults(defineProps<AlertProps>(), {
  type: "info",
  effect: "light",
  closable: true,
});
const emits = defineEmits<AlertEmits>();

// Alert展示状态
const alertShow = ref<boolean>(true);

// 关闭Alert
const closeAlert = () => {
  alertShow.value = false;
  emits("close");
};
</script>
