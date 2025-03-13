<template>
  <div class="effect block">
    <h4>Light Theme</h4>
    <me-alert effect="light">默认 Light 主题</me-alert>
    <me-alert type="success" effect="light">成功提示 Light 主题</me-alert>
    <me-alert type="warning" effect="light">警告提示 Light 主题</me-alert>
    <me-alert type="danger" effect="light">危险提示 Light 主题</me-alert>
    <me-alert type="info" effect="light">信息提示 Light 主题</me-alert>
  </div>

  <div class="effect block">
    <h4>Dark Theme</h4>
    <me-alert effect="dark">默认 Dark 主题</me-alert>
    <me-alert type="success" effect="dark">成功提示 Dark 主题</me-alert>
    <me-alert type="warning" effect="dark">警告提示 Dark 主题</me-alert>
    <me-alert type="danger" effect="dark">危险提示 Dark 主题</me-alert>
    <me-alert type="info" effect="dark">信息提示 Dark 主题</me-alert>
  </div>
</template>

<style>
.block {
  margin-bottom: 20px;
}

h4 {
  margin: 10px 0;
}
</style>