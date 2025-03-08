<template>
  <div>
    <Button icon="check">带图标按钮</Button>
    <Button icon="edit" type="primary">编辑</Button>
    <Button icon="delete" type="danger">删除</Button>
    <Button icon="search" circle></Button>
    <Button icon="star" type="primary" circle></Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
</script>