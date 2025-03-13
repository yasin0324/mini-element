<template>
  <div class="password block">
    <me-input v-model="input" show-password placeholder="请输入密码" />
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