<template>
  <div class="textarea block">
    <Input v-model="input" type="textarea" placeholder="请输入内容" />
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