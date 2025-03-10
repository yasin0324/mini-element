<template>
  <div class="basic block">
    <Input v-model="input" placeholder="请输入内容" />
    <span>{{ input }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Input from "@/components/Input/Input.vue";

const input = ref("");
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>
