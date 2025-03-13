<template>
  <div class="basic block">
    <div class="demo-button">
      <me-button type="primary" @click="open">创建通知</me-button>
      <me-button @click="openVNode">创建支持 VNode 的通知</me-button>
    </div>
  </div>
</template>

<script setup>
import { h } from "vue";
import { createNotification } from "@/components/Notification/method.ts";

const open = () => {
  createNotification({
    title: "通知",
    message: "这是一条基础通知",
  });
};

const openVNode = () => {
  createNotification({
    title: "VNode 示例",
    message: h("b", "这是一条支持 VNode 的通知"),
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