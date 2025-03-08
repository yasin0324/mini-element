<template>
  <div class="basic block">
    <Button>hello</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="info">Info</Button>
  </div>

  <div class="plain block">
    <Button plain>hello</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
    <Button type="info" plain>Info</Button>
  </div>

  <div class="round">
    <Button round>hello</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
    <Button type="info" round>Info</Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
</script>

<style>
.block {
  margin-bottom: 10px;
}
</style>
