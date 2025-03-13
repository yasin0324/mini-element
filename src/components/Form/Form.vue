<template>
  <form class="me-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import {
  formContextKey,
  type FormProps,
  type FormContext,
  type FormItemContext,
  type FormInstance,
  type FormValidateError,
} from "./types";
import { provide } from "vue";
import type { ValidateFieldsError } from "async-validator";

defineOptions({
  name: "meForm",
});

const props = defineProps<FormProps>();

const fields: FormItemContext[] = [];
const addField: FormContext["addField"] = (field) => {
  fields.push(field);
};
const removeField: FormContext["removeField"] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};

// 表单整体校验
const validate = async () => {
  let validateErrors: ValidateFieldsError = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (e) {
      const error = e as FormValidateError;
      validateErrors = {
        ...validateErrors,
        ...error.fields,
      };
    }
  }
  if (!Object.keys(validateErrors).length) {
    return true;
  }
  return Promise.reject(validateErrors);
};

// 重置表单
const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields;
  filterArr.forEach((field) => field.resetField());
};

// 清空提示信息
const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields;
  filterArr.forEach((field) => field.clearValidate());
};

provide(formContextKey, {
  ...props,
  addField,
  removeField,
});

defineExpose<FormInstance>({
  validate,
  clearValidate,
  resetFields,
});
</script>
