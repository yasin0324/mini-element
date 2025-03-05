<script setup lang="ts">
import { ref, h } from "vue";
import { type TooltipInstance } from "./components/Tooltip/type";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Button from "./components/Button/Button.vue";
import Dropdown from "./components/Dropdown/Dropdown.tsx";
import type { MenuOption } from "./components/Dropdown/type";

const options: MenuOption[] = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" },
];
const tooltipRef = ref<TooltipInstance | null>(null);
const trigger = ref<any>("click");
// setTimeout(() => {
//   trigger.value = "hover";
// }, 2000);
</script>

<template>
  <Dropdown placement="bottom" :trigger="trigger" :menu-options="options">
    <Button>Dropdown</Button>
  </Dropdown>
</template>

<style scoped></style>
