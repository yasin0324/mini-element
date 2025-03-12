<template>
  <div class="filterable block">
    <Select v-model="selected" :options="options" placeholder="请选择" filterable />
    <div class="selected-value">当前选中值: {{ selected }}</div>
  </div>
</template>

<script setup>
import Select from "@/components/Select/Select.vue";
import { ref } from "vue";

const selected = ref("");
const options = ref([
  {
    label: "苹果",
    value: "apple",
  },
  {
    label: "香蕉",
    value: "banana",
  },
  {
    label: "橙子",
    value: "orange",
  },
  {
    label: "葡萄",
    value: "grape",
  },
  {
    label: "草莓",
    value: "strawberry",
  },
]);
</script>

<style>
.selected-value {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
</style>