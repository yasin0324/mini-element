<script setup lang="ts">
import Message from "./components/Message/Message.vue";
import { createMessage } from "./components/Message/method";

createMessage({ message: "hello,world", duration: 0, showClose: true });
</script>

<template></template>
