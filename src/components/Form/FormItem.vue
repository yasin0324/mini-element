<template>
  <div
    class="me-form-item"
    :class="{
      'is-loading': validateStatus.loading,
      'is-success': validateStatus.state === 'success',
      'is-error': validateStatus.state === 'error',
    }"
  >
    <label class="me-form-item__label">
      <slot name="label" :label="label"> {{ label }}</slot>
    </label>
    <div class="me-form-item__content">
      <slot />
      <div class="me-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  formContextKey,
  formItemContextKey,
  type FormItemProps,
  type validateError,
} from "./types";
import { computed, inject, reactive, provide } from "vue";
import { isNil } from "lodash-es";
import Schema from "async-validator";

defineOptions({
  name: "meFormItem",
});

const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const validateStatus = reactive({
  state: "init",
  errorMsg: "",
  loading: false,
});

// FormItem的值
const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop];
  } else {
    return null;
  }
});

// FormItem的规则
const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop];
  } else {
    return [];
  }
});

// 规则校验
const validate = () => {
  const modelName = props.prop;
  if (modelName) {
    const validator = new Schema({
      [modelName]: itemRules.value,
    });
    validateStatus.loading = true;
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = "success";
      })
      .catch((e: validateError) => {
        const { errors } = e;
        validateStatus.state = "error";
        validateStatus.errorMsg = errors && errors.length ? errors[0].message || "" : "";
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};

provide(formItemContextKey, { validate });
</script>
