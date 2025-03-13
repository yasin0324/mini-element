<template>
  <div class="delay block">
    <div class="row">
      <me-tooltip content="这是延迟显示的提示" :open-delay="500">
        <me-button>延迟显示(500ms)</me-button>
      </me-tooltip>
      <me-tooltip content="这是延迟隐藏的提示" :close-delay="500">
        <me-button>延迟隐藏(500ms)</me-button>
      </me-tooltip>
      <me-tooltip content="这是延迟显示和隐藏的提示" :open-delay="500" :close-delay="500">
        <me-button>延迟显示和隐藏(500ms)</me-button>
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