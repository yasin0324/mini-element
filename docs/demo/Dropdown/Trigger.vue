<template>
  <div class="trigger block">
    <div class="row">
      <me-dropdown :menuOptions="options" trigger="hover">
        <me-button>Hover触发</me-button>
      </me-dropdown>
      <me-dropdown :menuOptions="options" trigger="click">
        <me-button>Click触发</me-button>
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