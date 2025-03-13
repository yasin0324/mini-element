<template>
  <div class="custom-title block">
    <me-collapse v-model="activeNames">
      <me-collapse-item name="1">
        <template #title>
          <div style="display: flex; align-items: center;">
            <me-icon me-icon="check-circle" style="margin-right: 5px; color: var(--me-color-success)" />
            <span>一致性 Consistency</span>
          </div>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </me-collapse-item>
      <me-collapse-item name="2">
        <template #title>
          <div style="display: flex; align-items: center;">
            <me-icon me-icon="comment" style="margin-right: 5px; color: var(--me-color-primary)" />
            <span>反馈 Feedback</span>
          </div>
        </template>
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </me-collapse-item>
      <me-collapse-item name="3">
        <template #title>
          <div style="display: flex; align-items: center;">
            <me-icon me-icon="bolt" style="margin-right: 5px; color: var(--me-color-warning)" />
            <span>效率 Efficiency</span>
          </div>
        </template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </me-collapse-item>
    </me-collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeNames = ref(['1']);
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>