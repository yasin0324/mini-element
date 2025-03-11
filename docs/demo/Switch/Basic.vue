<template>
  <div class="basic block">
    <Switch v-model="value" />
    <div class="text">Switch value: {{ value }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Switch from "@/components/Switch/Switch.vue";

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