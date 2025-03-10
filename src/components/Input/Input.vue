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
      'is-focus': isFocus,
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
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          class="me-input__inner"
          v-model="innerValue"
          v-bind="attrs"
          ref="inputRef"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span class="me-input__suffix" v-if="$slots.suffix || showClear || showPasswordArea">
          <slot name="suffix" />
          <Icon v-if="showClear" icon="circle-xmark" class="me-input__clear" @click="clear" />
          <Icon
            v-if="showPasswordArea && passwordVisible"
            icon="eye"
            class="me-input__password"
            @click="togglePasswordVisible"
          />
          <Icon
            v-if="showPasswordArea && !passwordVisible"
            icon="eye-slash"
            class="me-input__password"
            @click="togglePasswordVisible"
          />
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
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-bind="attrs"
        ref="inputRef"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps, InputEmits } from "./type";
import { ref, watch, computed, useAttrs } from "vue";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "meInput",
  inheritAttrs: false,
});
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  autocomplete: "off",
});
const emits = defineEmits<InputEmits>();
const attrs = useAttrs();

const inputRef = ref<HTMLInputElement | null>(null);

// 输入框的值
const innerValue = ref(props.modelValue);
// 是否聚焦
const isFocus = ref(false);
// 密码是否可见
const passwordVisible = ref(false);
// 展示清除按钮
const showClear = computed(
  () => props.clearable && !props.disabled && !!innerValue.value && isFocus.value
);
// 展示密码切换图标
const showPasswordArea = computed(
  () => props.showPassword && !props.disabled && !!innerValue.value
);

const handleInput = () => {
  emits("update:modelValue", innerValue.value);
  emits("input", innerValue.value);
};
const handleChange = () => {
  emits("update:modelValue", innerValue.value);
  emits("change", innerValue.value);
};
const handleFocus = (e: FocusEvent) => {
  isFocus.value = true;
  emits("focus", e);
};
const handleBlur = (e: FocusEvent) => {
  isFocus.value = false;
  emits("blur", e);
};
// 清除
const clear = () => {
  innerValue.value = "";
  emits("update:modelValue", "");
  emits("input", "");
  emits("change", "");
  emits("clear");
};
// 密码图标点击
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);

defineExpose({
  ref: inputRef,
});
</script>
