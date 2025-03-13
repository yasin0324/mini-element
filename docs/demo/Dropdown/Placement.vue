<template>
  <div class="placement block">
    <div class="row">
      <me-dropdown :menuOptions="options" placement="top">
        <me-button>向上弹出</me-button>
      </me-dropdown>
      <me-dropdown :menuOptions="options" placement="bottom">
        <me-button>向下弹出</me-button>
      </me-dropdown>
      <me-dropdown :menuOptions="options" placement="left">
        <me-button>向左弹出</me-button>
      </me-dropdown>
      <me-dropdown :menuOptions="options" placement="right">
        <me-button>向右弹出</me-button>
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