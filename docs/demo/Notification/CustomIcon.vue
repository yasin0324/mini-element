<template>
  <div class="custom-icon block">
    <div class="demo-button">
      <Button @click="open1">自定义图标</Button>
      <Button @click="open2">自定义成功图标</Button>
    </div>
  </div>
</template>

<script setup>
import { createNotification } from "@/components/Notification/method.ts";
import Button from "@/components/Button/Button.vue";

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