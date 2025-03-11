<template>
  <div
    class="me-switch"
    :class="{
      [`me-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
  >
    <input
      class="me-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
    />
    <div class="me-switch__core">
      <div class="me-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { SwitchProps, SwitchEmits } from "./type";

defineOptions({
  name: "meSwitch",
  inheritAttrs: false,
});

const props = defineOptions<SwitchProps>();
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);
const checked = computed(() => innerValue.value);
</script>
