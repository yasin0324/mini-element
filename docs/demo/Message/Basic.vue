<template>
  <div class="basic block">
    <div class="demo-button">
      <me-button type="primary" @click="open">创建消息提示</me-button>
      <me-button @click="open2">创建支持 VNode 的消息</me-button>
    </div>
  </div>
</template>

<script setup>
import { h } from "vue";
import { createMessage } from "@/components/Message/method.ts";

const open = () => {
  createMessage({
    message: "hello world",
  });
};
const open2 = () => {
  createMessage({ message: h("b", "this is bold") });
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
