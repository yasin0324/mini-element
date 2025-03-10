<template>
  <div
    class="me-input"
    :class="{
      [`me-input--${type}`]: type,
      [`me-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div class="me-input__prepend" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>

      <div class="me-input__wrapper">
        <!-- prefix slot -->
        <span class="me-input__prefix" v-if="$slots.prefix">
          <slot name="prefix" />
        </span>

        <input :type="type" :disabled="disabled" class="me-input__inner" />
        <!-- suffix slot -->
        <span class="me-input__suffix" v-if="$slots.suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
      <!-- append slot -->
      <div class="me-input__append" v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea class="me-textarea__wrapper" :disabled="disabled"></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from "./type";

defineOptions({
  name: "meInput",
});
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});
</script>
