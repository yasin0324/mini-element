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
        <input
          :type="type"
          :disabled="disabled"
          class="me-input__inner"
          @input="handleInput"
          v-model="innerValue"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span class="me-input__suffix" v-if="$slots.suffix || showClear">
          <slot name="suffix" />
          <Icon v-if="showClear" icon="circle-xmark" class="me-input__clear" @click="clear" />
        </span>
      </div>
      <!-- append slot -->
      <div class="me-input__append" v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        class="me-textarea__wrapper"
        :disabled="disabled"
        @input="handleInput"
        v-model="innerValue"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps, InputEmits } from "./type";
import { ref, watch, computed } from "vue";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "meInput",
});
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});
const emits = defineEmits<InputEmits>();

// 输入框的值
const innerValue = ref(props.modelValue);
// 是否聚焦
const isFocus = ref(false);
// 展示清楚按钮
const showClear = computed(
  () => props.clearable && !props.disabled && innerValue.value && isFocus.value
);

const handleInput = () => {
  emits("update:modelValue", innerValue.value);
};
const handleFocus = () => {
  isFocus.value = true;
};
const handleBlur = () => {
  isFocus.value = false;
};
// 清除
const clear = () => {
  innerValue.value = "";
  emits("update:modelValue", innerValue.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
