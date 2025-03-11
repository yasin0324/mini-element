<template>
  <div
    class="me-switch"
    :class="{
      [`me-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="switchValue"
  >
    <input
      ref="inputRef"
      class="me-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="me-switch__core">
      <div class="me-switch__core-inner">
        <span v-if="activeText || inactiveText" class="me-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="me-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import type { SwitchProps, SwitchEmits } from "./type";

defineOptions({
  name: "meSwitch",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
});
const emits = defineEmits<SwitchEmits>();

const inputRef = ref<HTMLInputElement | null>(null);

const innerValue = ref(props.modelValue);
// 是否被选中
const checked = computed(() => innerValue.value === props.activeValue);
// 切换
const switchValue = () => {
  if (props.disabled) {
    return;
  }
  const newValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = newValue;
  emits("change", innerValue.value);
  emits("update:modelValue", innerValue.value);
};

onMounted(() => {
  inputRef.value!.checked = checked.value;
});

watch(checked, (val) => {
  inputRef.value!.checked = val;
});

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
