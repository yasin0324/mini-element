<template>
  <div class="basic block">
    <me-input v-model="input" placeholder="请输入内容" />
    <span>{{ input }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>
