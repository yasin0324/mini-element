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
import {formContextKey. type FormItemProps } from "./types";
import { computed, inject } from "vue";
import { isNil } from "lodash-es";
import Schema from 'async-validator'

defineOptions({
  name: "meFormItem",
});

const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const innerValue = computed(() => {
    const model = formContext?.model;
    if (model && props.prop && isNil(model[props.prop])) {
        return model[props.prop];
    } else {
        return null;
    }
})

const itemRules = computed(() => {
    const rules = formContext?.model;
    if (rules && props.prop && rules[props.prop]) {
        return rules[props.prop]
    } else {
        return []
    }
})

const validate = () => {
    const modelName = props.prop
    if (modelName) {
        const validator = new Schema({
            [modelName]: itemRules.value
        });
        validator
          .validate({ [modelName]: innerValue.value })
          .then(() => {
            console.log('no error');
          })
          .catch((e) => {
            console.log(e.errors)
          })
    }
}
</script>
