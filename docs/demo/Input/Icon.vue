<template>
  <div class="icon block">
    <div class="prefix-icon" style="margin-bottom: 15px;">
      <Input v-model="input1" placeholder="请输入内容">
        <template #prefix>
          <Icon icon="search" />
        </template>
      </Input>
    </div>
    <div class="suffix-icon">
      <Input v-model="input2" placeholder="请输入内容">
        <template #suffix>
          <Icon icon="calendar" />
        </template>
      </Input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from "@/components/Input/Input.vue";
import Icon from "@/components/Icon/Icon.vue";

const input1 = ref('');
const input2 = ref('');
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>