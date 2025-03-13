<template>
  <div class="hide-after-click block">
    <div class="row">
      <me-dropdown :menuOptions="options" :hideAfterClick="true">
        <me-button>点击后隐藏（默认）</me-button>
      </me-dropdown>
      <me-dropdown :menuOptions="options" :hideAfterClick="false">
        <me-button>点击后不隐藏</me-button>
      </me-dropdown>
    </div>
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
    key: "2"
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
.row {
  display: flex;
  gap: 20px;
}
</style>