<template>
  <div class="closable block">
    <div class="demo-button">
      <me-button @click="open1">默认带关闭按钮</me-button>
      <me-button @click="open2">不显示关闭按钮</me-button>
    </div>
  </div>
</template>

<script setup>
import { createNotification } from "@/components/Notification/method.ts";

const open1 = () => {
  createNotification({
    title: "带关闭按钮",
    message: "这是一条默认带有关闭按钮的通知",
    showClose: true
  });
};

const open2 = () => {
  createNotification({
    title: "无关闭按钮",
    message: "这是一条不带关闭按钮的通知",
    showClose: false
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