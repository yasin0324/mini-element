---
title: Alert | mini-Element
description: Alert 组件的文档
---

# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件属于非浮层元素，不会自动消失或关闭。Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert组件的基础用法"></preview>

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`，通过 `effect` 属性来设置，默认为 `light`。

<preview path="../demo/Alert/Effect.vue" title="不同主题" description="通过 effect 属性设置不同的主题"></preview>

## 可关闭的提示

设置 `closable` 属性决定是否可关闭，默认为 `true`。关闭时会触发 `close` 事件。

<preview path="../demo/Alert/Closable.vue" title="可关闭的提示" description="可以关闭的提示框"></preview>

## API

### 属性

| 属性名   | 说明       | 类型      | 可选值                                    | 默认值  |
| -------- | ---------- | --------- | ----------------------------------------- | ------- |
| type     | 提示类型   | `string`  | `success` / `warning` / `danger` / `info` | `info`  |
| effect   | 主题样式   | `string`  | `light` / `dark`                          | `light` |
| closable | 是否可关闭 | `boolean` | —                                         | `true`  |

### 事件

| 事件名 | 说明                    | 参数 |
| ------ | ----------------------- | ---- |
| close  | 关闭 Alert 时触发的事件 | —    |

### 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| default | Alert 的内容 |
