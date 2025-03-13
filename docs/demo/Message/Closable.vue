<template>
  <div class="closable block">
    <div class="demo-button">
      <me-button @click="open">可关闭的消息提示</me-button>
    </div>
  </div>
</template>

<script setup>
import { createMessage } from "@/components/Message/method.ts";

const open = () => {
  createMessage({
    message: "这是一条可关闭的消息提示",
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
</style>