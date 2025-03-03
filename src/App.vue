<script setup lang="ts">
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Button from "./components/Button/Button.vue";
</script>

<template>
  <Tooltip>
    <Button>Tooltip</Button>
    <template #content>
      <h1>helloWorld</h1>
    </template>
  </Tooltip>
</template>

<style scoped></style>
