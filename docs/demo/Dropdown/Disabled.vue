<template>
  <div class="disabled block">
    <me-dropdown :menuOptions="options">
      <me-button>带禁用选项的下拉菜单</me-button>
    </me-dropdown>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ref([
  {
    label: "选项1",
    key: "1"
  },
  {
    label: "选项2 (禁用)",
    key: "2",
    disabled: true
  },
  {
    label: "选项3",
    key: "3"
  }
]);
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>