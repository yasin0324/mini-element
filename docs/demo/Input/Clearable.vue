<template>
  <div class="clearable block">
    <Input v-model="input" clearable placeholder="可清空的输入框" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from "@/components/Input/Input.vue";

const input = ref('这是一段可以被清空的文本');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>