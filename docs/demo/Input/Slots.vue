<template>
  <div class="slots block">
    <div class="prepend-append" style="margin-bottom: 15px;">
      <me-input v-model="input1" placeholder="请输入内容">
        <template #prepend>Http://</template>
        <template #append>.com</template>
      </me-input>
    </div>
    <div class="mixed">
      <me-input v-model="input2" placeholder="请输入内容">
        <template #prepend>Http://</template>
        <template #suffix>
          <me-icon icon="search" />
        </template>
      </me-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>