<template>
  <div class="disabled block">
    <Select v-model="selected" :options="options" placeholder="请选择" disabled />
    <div class="selected-value">当前选中值: {{ selected }}</div>
  </div>
</template>

<script setup>
import Select from "@/components/Select/Select.vue";
import { ref } from "vue";

const selected = ref("1");
const options = ref([
  {
    label: "选项1",
    value: "1",
  },
  {
    label: "选项2",
    value: "2",
  },
  {
    label: "选项3",
    value: "3",
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