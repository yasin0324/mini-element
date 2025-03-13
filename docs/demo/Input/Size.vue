<template>
  <div class="size block">
    <div class="large" style="margin-bottom: 15px;">
      <me-input v-model="input1" size="large" placeholder="大型输入框" />
    </div>
    <div class="default" style="margin-bottom: 15px;">
      <me-input v-model="input2" placeholder="默认尺寸输入框" />
    </div>
    <div class="small">
      <me-input v-model="input3" size="small" placeholder="小型输入框" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>