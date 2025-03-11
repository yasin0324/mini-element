<template>
  <div class="text-switch block">
    <div class="row">
      <Switch v-model="value1" active-text="开启" inactive-text="关闭" />
    </div>
    <div class="row">
      <Switch v-model="value2" active-text="ON" inactive-text="OFF" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Switch from "@/components/Switch/Switch.vue";

const value1 = ref(true);
const value2 = ref(false);
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
</style>