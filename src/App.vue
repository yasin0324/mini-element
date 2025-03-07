<script setup lang="ts">
import { onMounted } from "vue";
import { createMessage } from "./components/Message/method";

onMounted(() => {
  const instance = createMessage({ message: "hello,world", duration: 0 });
  createMessage({ message: "hello,world1", duration: 0 });
  createMessage({ message: "hello,world2", duration: 0 });

  setTimeout(() => {
    instance.destory();
  }, 2000);
});
</script>

<template></template>
