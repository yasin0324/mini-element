<template>
  <form class="me-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { formContextKey, type FormProps } from "./types";
import { provide } from "vue";

defineOptions({
  name: "meForm",
});

const props = defineProps<FormProps>();

provide(formContextKey, props);
</script>
