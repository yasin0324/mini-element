<template>
  <button
    ref="_ref"
    class="me-button"
    :class="{
      [`me-button--${type}`]: type,
      [`me-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

defineOptions({
  name: "meButton",
});

const _ref = ref<HTMLButtonElement>();
defineExpose({
  ref: _ref,
});
</script>

<style scoped></style>
