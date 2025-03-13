<template>
  <div class="duration block">
    <div class="demo-button">
      <me-button @click="open1">默认3秒关闭</me-button>
      <me-button @click="open2">不会自动关闭</me-button>
      <me-button @click="open3">5秒后关闭</me-button>
    </div>
  </div>
</template>

<script setup>
import { createNotification } from "@/components/Notification/method.ts";

const open1 = () => {
  createNotification({
    title: "默认关闭时间",
    message: "这条通知将在3秒后自动关闭",
    type: "info"
  });
};

const open2 = () => {
  createNotification({
    title: "不会自动关闭",
    message: "这条通知不会自动关闭，需要手动点击关闭按钮",
    type: "warning",
    duration: 0
  });
};

const open3 = () => {
  createNotification({
    title: "自定义关闭时间",
    message: "这条通知将在5秒后自动关闭",
    type: "success",
    duration: 5000
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