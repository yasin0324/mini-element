<template>
  <div>
    <Button disabled>默认禁用按钮</Button>
    <Button type="primary" disabled>主要禁用按钮</Button>
    <Button type="success" disabled>成功禁用按钮</Button>
    <Button type="info" disabled>信息禁用按钮</Button>
    <Button type="warning" disabled>警告禁用按钮</Button>
    <Button type="danger" disabled>危险禁用按钮</Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
</script>