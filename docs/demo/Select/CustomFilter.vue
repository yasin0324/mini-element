<template>
  <div class="custom-filter block">
    <Select v-model="selected" :options="options" placeholder="请选择" filterable :filterMethod="customFilter" />
    <div class="selected-value">当前选中值: {{ selected }}</div>
    <div class="filter-info">自定义筛选：只显示包含输入值的选项，不区分大小写</div>
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

// 自定义筛选方法
const customFilter = (value) => {
  if (!value) return options.value;
  return options.value.filter(
    (option) => option.label.toLowerCase().includes(value.toLowerCase())
  );
};
</script>

<style>
.selected-value {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
.filter-info {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}
</style>