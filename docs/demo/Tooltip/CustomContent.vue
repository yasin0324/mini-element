<template>
  <div class="custom-content block">
    <div class="row">
      <me-tooltip trigger="click">
        <me-button>点击查看自定义内容</me-button>
        <template #content>
          <div class="custom-tooltip-content">
            <h4>自定义标题</h4>
            <p>这是一段自定义内容，可以包含任意HTML元素</p>
            <div class="divider"></div>
            <me-button size="small" type="primary">操作按钮</me-button>
          </div>
        </template>
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
.custom-tooltip-content {
  padding: 5px;
}
.custom-tooltip-content h4 {
  margin: 5px 0;
  font-size: 16px;
}
.custom-tooltip-content p {
  margin: 5px 0;
  font-size: 14px;
}
.divider {
  height: 1px;
  background-color: #eee;
  margin: 8px 0;
}
</style>