<template>
  <div class="custom-template block">
    <me-select v-model="selected" :options="options" placeholder="请选择" :renderLabel="renderLabel" />
    <div class="selected-value">当前选中值: {{ selected }}</div>
    <div class="template-info">自定义模板：为每个选项添加图标和样式</div>
  </div>
</template>

<script setup>
import { ref, h } from "vue";

const selected = ref("");
const options = ref([
  {
    label: "成功",
    value: "success",
    icon: "circle-check"
  },
  {
    label: "警告",
    value: "warning",
    icon: "circle-exclamation"
  },
  {
    label: "危险",
    value: "danger",
    icon: "circle-xmark"
  },
  {
    label: "信息",
    value: "info",
    icon: "circle-info"
  }
]);

// 自定义渲染函数
const renderLabel = (option) => {
  return h('div', { class: 'custom-option' }, [
    h(me-icon, { icon: option.icon, class: `icon-${option.value}` }),
    h('span', { class: 'option-label' }, option.label)
  ]);
};
</script>

<style>
.selected-value {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
.template-info {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}
.custom-option {
  display: flex;
  align-items: center;
}
.option-label {
  margin-left: 5px;
}
.icon-success {
  color: #67c23a;
}
.icon-warning {
  color: #e6a23c;
}
.icon-danger {
  color: #f56c6c;
}
.icon-info {
  color: #909399;
}
</style>