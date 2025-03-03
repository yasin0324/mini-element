<script setup lang="ts">
import { ref } from "vue";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Button from "./components/Button/Button.vue";

const trigger = ref<any>("click");
setTimeout(() => {
  trigger.value = "hover";
}, 2000);
</script>

<template>
  <Tooltip placement="bottom" :trigger="trigger">
    <Button>Tooltip</Button>
    <template #content>
      <h1>helloWorld</h1>
    </template>
  </Tooltip>
</template>

<style scoped></style>
