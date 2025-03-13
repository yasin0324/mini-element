<template>
  <div class="manual block">
    <div class="row">
      <me-button @click="showTooltip">显示Tooltip</me-button>
      <me-button @click="hideTooltip">隐藏Tooltip</me-button>
      <me-tooltip content="这是手动控制的提示" manual ref="tooltipRef">
        <me-button>手动控制的目标元素</me-button>
      </me-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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