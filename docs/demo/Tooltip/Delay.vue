<template>
  <div class="delay block">
    <div class="row">
      <Tooltip content="这是延迟显示的提示" :open-delay="500">
        <Button>延迟显示(500ms)</Button>
      </Tooltip>
      <Tooltip content="这是延迟隐藏的提示" :close-delay="500">
        <Button>延迟隐藏(500ms)</Button>
      </Tooltip>
      <Tooltip content="这是延迟显示和隐藏的提示" :open-delay="500" :close-delay="500">
        <Button>延迟显示和隐藏(500ms)</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
</script>

<style>
.block {
  margin-bottom: 20px;
}
.row {
  display: flex;
  gap: 20px;
}
</style>