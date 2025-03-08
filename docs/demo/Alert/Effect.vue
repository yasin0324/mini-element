<template>
  <div class="effect block">
    <h4>Light Theme</h4>
    <Alert effect="light">默认 Light 主题</Alert>
    <Alert type="success" effect="light">成功提示 Light 主题</Alert>
    <Alert type="warning" effect="light">警告提示 Light 主题</Alert>
    <Alert type="danger" effect="light">危险提示 Light 主题</Alert>
    <Alert type="info" effect="light">信息提示 Light 主题</Alert>
  </div>

  <div class="effect block">
    <h4>Dark Theme</h4>
    <Alert effect="dark">默认 Dark 主题</Alert>
    <Alert type="success" effect="dark">成功提示 Dark 主题</Alert>
    <Alert type="warning" effect="dark">警告提示 Dark 主题</Alert>
    <Alert type="danger" effect="dark">危险提示 Dark 主题</Alert>
    <Alert type="info" effect="dark">信息提示 Dark 主题</Alert>
  </div>
</template>

<script setup>
import Alert from "@/components/Alert/Alert.vue";
</script>

<style>
.block {
  margin-bottom: 20px;
}

h4 {
  margin: 10px 0;
}
</style>