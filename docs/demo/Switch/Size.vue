<template>
  <div class="size-switch block">
    <div class="row">
      <span class="label">Large:</span>
      <me-switch v-model="value1" size="large" />
    </div>
    <div class="row">
      <span class="label">Default:</span>
      <me-switch v-model="value2" />
    </div>
    <div class="row">
      <span class="label">Small:</span>
      <me-switch v-model="value3" size="small" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
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
.label {
  width: 80px;
  color: #606266;
}
</style>