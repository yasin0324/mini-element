<template>
  <div class="custom-icon block">
    <div class="demo-button">
      <me-button @click="open1">自定义图标</me-button>
      <me-button @click="open2">自定义成功图标</me-button>
    </div>
  </div>
</template>

<script setup>
import { createNotification } from "@/components/Notification/method.ts";

const open1 = () => {
  createNotification({
    title: "自定义图标",
    message: "这是一条带有自定义图标的通知",
    icon: "bell"
  });
};

const open2 = () => {
  createNotification({
    title: "自定义成功图标",
    message: "这是一条带有自定义图标的成功通知",
    type: "success",
    icon: "check"
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
</style>