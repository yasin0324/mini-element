<template>
  <div class="closable block">
    <Alert closable>closable alert</Alert>
  </div>

  <div class="non-closable block">
    <Alert :closable="false">non-closeable alert</Alert>
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
