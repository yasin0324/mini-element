<template>
  <div class="trigger block">
    <div class="row">
      <me-tooltip content="这是hover触发的提示" trigger="hover">
        <me-button>Hover触发</me-button>
      </me-tooltip>
      <me-tooltip content="这是click触发的提示" trigger="click">
        <me-button>Click触发</me-button>
      </me-tooltip>
    </div>
  </div>
</template>

<style>
.block {
  margin-bottom: 20px;
}
.row {
  display: flex;
  gap: 20px;
}
</style>