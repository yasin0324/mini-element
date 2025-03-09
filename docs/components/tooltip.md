---
title: Tooltip | mini-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示

常用于展示鼠标悬停、点击时的提示信息。

## 基础用法

使用 `content` 属性来决定 `hover` 时的提示信息。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip组件的基础用法"></preview>

## 不同的触发方式

Tooltip 组件提供了两种触发方式：`hover` 和 `click`，通过 `trigger` 属性设置。

<preview path="../demo/Tooltip/Trigger.vue" title="触发方式" description="通过 trigger 属性设置触发方式"></preview>

## 不同的位置

Tooltip 组件提供了多种不同的弹出位置，通过 `placement` 属性设置。

<preview path="../demo/Tooltip/Placement.vue" title="弹出位置" description="通过 placement 属性设置弹出位置"></preview>

## 手动控制

通过 `manual` 属性设置为手动控制模式，此时可以通过组件实例的 `show` 和 `hide` 方法手动控制 Tooltip 的显示和隐藏。

<preview path="../demo/Tooltip/Manual.vue" title="手动控制" description="通过 manual 属性和组件实例方法控制显示隐藏"></preview>

## 延迟显示/隐藏

可以通过 `openDelay` 和 `closeDelay` 属性设置延迟显示和隐藏的时间。

<preview path="../demo/Tooltip/Delay.vue" title="延迟控制" description="通过 openDelay 和 closeDelay 属性设置延迟时间"></preview>

## 自定义内容

可以通过 `content` 插槽自定义 Tooltip 的内容。

<preview path="../demo/Tooltip/CustomContent.vue" title="自定义内容" description="通过 content 插槽自定义内容"></preview>

## API

### 属性

| 属性名        | 说明                                      | 类型      | 可选值                                                                                                                                                  | 默认值   |
| ------------- | ----------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| content       | 显示的内容，也可以通过 `content` 插槽传入 | `string`  | —                                                                                                                                                       | —        |
| trigger       | 触发方式                                  | `string`  | `hover` / `click`                                                                                                                                       | `hover`  |
| placement     | 出现位置                                  | `string`  | `top` / `top-start` / `top-end` / `bottom` / `bottom-start` / `bottom-end` / `left` / `left-start` / `left-end` / `right` / `right-start` / `right-end` | `bottom` |
| manual        | 是否手动控制模式                          | `boolean` | —                                                                                                                                                       | `false`  |
| popperOptions | popper.js 的配置项                        | `object`  | —                                                                                                                                                       | —        |
| transition    | 过渡动画名称                              | `string`  | —                                                                                                                                                       | `fade`   |
| openDelay     | 延迟显示，单位毫秒                        | `number`  | —                                                                                                                                                       | `0`      |
| closeDelay    | 延迟关闭，单位毫秒                        | `number`  | —                                                                                                                                                       | `0`      |

### 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | Tooltip 触发的元素 |
| content | 自定义内容         |

### 事件

| 事件名         | 说明               | 回调参数           |
| -------------- | ------------------ | ------------------ |
| visible-change | 显示状态变更时触发 | 显示状态 `boolean` |

### 实例方法

| 方法名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| show   | 显示 Tooltip | —    |
| hide   | 隐藏 Tooltip | —    |
