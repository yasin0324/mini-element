<template>
  <div class="basic block">
    <me-dropdown :menuOptions="options">
      <me-button>点击下拉菜单</me-button>
    </me-dropdown>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ref([
  {
    label: "选项1",
    key: "1",
  },
  {
    label: "选项2",
    key: "2",
  },
  {
    label: "选项3",
    key: "3",
  },
]);
</script>

<style>
.vp-doc .vitepress-demo-preview-preview ul,
.vp-doc .vitepress-demo-preview-preview ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
