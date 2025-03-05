<script setup lang="ts">
import { ref } from "vue";
import { type TooltipInstance } from "./components/Tooltip/type";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Button from "./components/Button/Button.vue";

const tooltipRef = ref<TooltipInstance | null>(null);
const trigger = ref<any>("click");
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
// setTimeout(() => {
//   trigger.value = "hover";
// }, 2000);
</script>

<template>
  <Tooltip placement="bottom" :trigger="trigger" manual ref="tooltipRef">
    <Button>Tooltip</Button>
    <template #content>
      <h1>helloWorld</h1>
    </template>
  </Tooltip>
  <Button @click="open">open button</Button>
  <Button @click="close">hide button</Button>
</template>

<style scoped></style>
