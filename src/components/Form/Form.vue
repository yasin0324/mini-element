<template>
  <form class="me-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormProps } from "./types";

defineOptions({
  name: "meForm",
});

defineProps<FormProps>();
</script>
