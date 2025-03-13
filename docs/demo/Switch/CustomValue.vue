<template>
  <div class="custom-value block">
    <div class="row">
      <me-switch v-model="value" active-value="100" inactive-value="0" />
      <span class="text">Current value: {{ value }}</span>
    </div>
    <div class="row">
      <button @click="value = value === '100' ? '0' : '100'" class="toggle-btn">Toggle Value</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('100');
</script>

<style>
.block {
  margin-bottom: 20px;
}
.row {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.text {
  margin-left: 10px;
  color: #606266;
}
.toggle-btn {
  padding: 6px 12px;
  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
}
.toggle-btn:hover {
  background-color: #ecf5ff;
  color: #409eff;
}
</style>