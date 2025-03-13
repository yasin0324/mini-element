<template>
  <div class="closable block">
    <me-alert closable>closable me-alert</me-alert>
  </div>

  <div class="non-closable block">
    <me-alert :closable="false">non-closeable me-alert</me-alert>
  </div>
</template>

<style>
.block {
  margin-bottom: 20px;
}
</style>
