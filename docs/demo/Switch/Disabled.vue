<template>
  <div class="disabled block">
    <div class="row">
      <Switch v-model="value1" disabled />
      <span class="text">Disabled when off</span>
    </div>
    <div class="row">
      <Switch v-model="value2" disabled />
      <span class="text">Disabled when on</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Switch from "@/components/Switch/Switch.vue";

const value1 = ref(false);
const value2 = ref(true);
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
</style>