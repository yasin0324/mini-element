<template>
  <div class="basic block">
    <Dropdown :menu-options="options">
      <Button>hover下拉菜单</Button>
    </Dropdown>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import { h } from "vue";

const options = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" },
];
</script>

<style>
.vp-doc .vitepress-demo-preview-preview ul,
.vp-doc .vitepress-demo-preview-preview ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
