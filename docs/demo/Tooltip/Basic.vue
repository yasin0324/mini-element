<template>
  <div class="basic block">
    <Tooltip content="这是一个提示文字">
      <Button>带提示的按钮</Button>
    </Tooltip>
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
</style>
