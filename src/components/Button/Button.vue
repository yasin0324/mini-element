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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon.vue";
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
