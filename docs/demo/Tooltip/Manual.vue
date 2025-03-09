<template>
  <div class="manual block">
    <div class="row">
      <Button @click="showTooltip">显示Tooltip</Button>
      <Button @click="hideTooltip">隐藏Tooltip</Button>
      <Tooltip content="这是手动控制的提示" manual ref="tooltipRef">
        <Button>手动控制的目标元素</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/Button/Button.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";

const tooltipRef = ref(null);

const showTooltip = () => {
  tooltipRef.value?.show();
};

const hideTooltip = () => {
  tooltipRef.value?.hide();
};
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