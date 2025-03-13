<template>
  <div class="icon block">
    <div class="prefix-icon" style="margin-bottom: 15px">
      <me-input v-model="input1" placeholder="请输入内容">
        <template #prefix>
          <me-icon icon="search" />
        </template>
      </me-input>
    </div>
    <div class="suffix-icon">
      <me-input v-model="input2" placeholder="请输入内容">
        <template #suffix>
          <me-icon icon="calendar" />
        </template>
      </me-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const input1 = ref("");
const input2 = ref("");
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>
