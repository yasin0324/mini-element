<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import type { ButtonInstance } from "./components/Button/types";
import { onMounted, ref } from "vue";
const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value);
  }
});
</script>

<template>
  <div>
    <Button ref="buttonRef">Test Button</Button>
  </div>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>

  <div>
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </div>

  <div>
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </div>
</template>

<style scoped></style>
