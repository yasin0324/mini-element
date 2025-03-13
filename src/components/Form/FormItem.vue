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

const innerRules = computed(() => {
    const rules = formContext?.model;
    if (rules && props.prop && rules[props.prop]) {
        return rules[props.prop]
    } else {
        return []
    }
})
</script>
