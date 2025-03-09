<template>
  <div class="trigger block">
    <div class="row">
      <Tooltip content="这是hover触发的提示" trigger="hover">
        <Button>Hover触发</Button>
      </Tooltip>
      <Tooltip content="这是click触发的提示" trigger="click">
        <Button>Click触发</Button>
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