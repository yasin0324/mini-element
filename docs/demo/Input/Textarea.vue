<template>
  <div class="textarea block">
    <me-input v-model="input" type="textarea" placeholder="请输入内容" />
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