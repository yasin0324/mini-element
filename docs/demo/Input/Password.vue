<template>
  <div class="password block">
    <Input v-model="input" show-password placeholder="请输入密码" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from "@/components/Input/Input.vue";

const input = ref('');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>