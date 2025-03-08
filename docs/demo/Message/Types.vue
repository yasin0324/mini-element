<template>
  <div class="types block">
    <div class="demo-button">
      <Button @click="openInfo">Info</Button>
      <Button @click="openSuccess" type="success">Success</Button>
      <Button @click="openWarning" type="warning">Warning</Button>
      <Button @click="openDanger" type="danger">Danger</Button>
    </div>
  </div>
</template>

<script setup>
import { createMessage } from "@/components/Message/method.ts";
import Button from "@/components/Button/Button.vue";

const openInfo = () => {
  createMessage({
    message: "这是一条信息提示",
    type: "info",
  });
};

const openSuccess = () => {
  createMessage({
    message: "这是一条成功提示",
    type: "success",
  });
};

const openWarning = () => {
  createMessage({
    message: "这是一条警告提示",
    type: "warning",
  });
};

const openDanger = () => {
  createMessage({
    message: "这是一条危险提示",
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

.demo-button button {
  margin-right: 10px;
}
</style>
