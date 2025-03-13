<template>
  <div class="duration block">
    <div class="demo-button">
      <me-button @click="open1">显示 3 秒</me-button>
      <me-button @click="open2">显示 5 秒</me-button>
      <me-button @click="open3">永久显示</me-button>
    </div>
  </div>
</template>

<script setup>
import { createMessage } from "@/components/Message/method.ts";

const open1 = () => {
  createMessage({
    message: "默认显示 3 秒",
    type: "info"
  });
};

const open2 = () => {
  createMessage({
    message: "显示 5 秒",
    type: "success",
    duration: 5000
  });
};

const open3 = () => {
  createMessage({
    message: "永久显示，不会自动关闭",
    type: "warning",
    duration: 0,
    showClose: true
  });
};
</script>

<style>
.block {
  margin-bottom: 20px;
}

.demo-button {
  margin-bottom: 10px;
}

.demo-button button {
  margin-right: 10px;
}
</style>