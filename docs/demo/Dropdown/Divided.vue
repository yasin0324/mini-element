<template>
  <div class="divided block">
    <me-dropdown :menuOptions="options">
      <me-button>带分割线的下拉菜单</me-button>
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
    label: "选项2",
    key: "2",
    divided: true
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