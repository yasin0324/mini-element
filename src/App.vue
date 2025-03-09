<script setup lang="ts">
import { onMounted } from "vue";
import { createNotification } from "./components/Notification/method";

onMounted(() => {
  createNotification({
    title: "hello,world",
    message: "hello wrold",
    duration: 3000,
    showClose: true,
    type: "danger",
  });
});
</script>

<template></template>
