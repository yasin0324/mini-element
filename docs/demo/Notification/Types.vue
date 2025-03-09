<template>
  <div class="types block">
    <div class="demo-button">
      <Button @click="open1">成功</Button>
      <Button @click="open2">警告</Button>
      <Button @click="open3">消息</Button>
      <Button @click="open4">错误</Button>
    </div>
  </div>
</template>

<script setup>
import { createNotification } from "@/components/Notification/method.ts";
import Button from "@/components/Button/Button.vue";

const open1 = () => {
  createNotification({
    title: "成功",
    message: "这是一条成功的通知",
    type: "success",
  });
};

const open2 = () => {
  createNotification({
    title: "警告",
    message: "这是一条警告的通知",
    type: "warning",
  });
};

const open3 = () => {
  createNotification({
    title: "消息",
    message: "这是一条消息通知",
    type: "info",
  });
};

const open4 = () => {
  createNotification({
    title: "错误",
    message: "这是一条错误的通知",
    type: "danger",
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