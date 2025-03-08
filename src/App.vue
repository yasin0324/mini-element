<script setup lang="ts">
import { onMounted } from "vue";
import { createMessage } from "./components/Message/method";

onMounted(() => {
  createMessage({ message: "hello,world", duration: 3000 });
  createMessage({ message: "hello,world1", duration: 0 });
  createMessage({ message: "hello,world2", duration: 0 });
});
</script>

<template></template>
