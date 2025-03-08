<template>
  <div class="basic block">
    <Alert>this is the alert</Alert>
    <Alert type="success">this is the success alert</Alert>
    <Alert type="warning">this is the warning alert</Alert>
    <Alert type="danger">this is the danger alert</Alert>
    <Alert type="info">this is the info alert</Alert>
  </div>
</template>

<script setup>
import Alert from "@/components/Alert/Alert.vue";
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>
