<template>
  <div class="disabled block">
    <me-input v-model="input" disabled placeholder="禁用状态的输入框" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>