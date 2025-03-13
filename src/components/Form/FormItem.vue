<template>
  <div class="me-form-item">
    <label class="me-form-item__label">
      <slot name="label" :label="label"> {{ label }}</slot>
    </label>
    <div class="me-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormItemProps } from "./types";

defineOptions({
  name: "meFormItem",
});

defineProps<FormItemProps>();
</script>
