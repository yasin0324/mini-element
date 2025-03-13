<template>
  <form class="me-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { formContextKey, type FormProps, type FormContext, type FormItemContext } from "./types";
import { provide } from "vue";

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

provide(formContextKey, {
  ...props,
  addField,
  removeField,
});
</script>
