<template>
  <div class="basic block">
    <me-switch v-model="value" />
    <div class="text">me-switch value: {{ value }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(true);
</script>

<style>
.block {
  margin-bottom: 20px;
}
.text {
  margin-top: 10px;
  color: #606266;
}
</style>