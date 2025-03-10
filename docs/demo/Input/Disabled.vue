<template>
  <div class="disabled block">
    <Input v-model="input" disabled placeholder="禁用状态的输入框" />
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