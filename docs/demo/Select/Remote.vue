<template>
  <me-select
    v-model="test"
    placeholder="搜索远程结果"
    filterable
    remote
    :remote-method="handleFetch"
  />
  <div class="selected-value">当前选中值: {{ test }}</div>
  <div class="filter-info">远程搜索：输入内容后模拟从服务器获取数据</div>
</template>

<script setup>
import { ref } from "vue";

const test = ref("");

const handleFetch = (query) => {
  if (!query) return Promise.resolve([]);
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item) => ({ label: item.name, value: item.node_id }));
    });
};
</script>
