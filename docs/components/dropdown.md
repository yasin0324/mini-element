---
title: Dropdown | mini-Element
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单

常用于页面中的下拉菜单，提供多个选项供用户选择。

## 基础用法

基础的下拉菜单，通过 `menuOptions` 属性设置下拉菜单的选项。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown组件的基础用法"></preview>

## 不同的触发方式

Dropdown 组件提供了两种触发方式：`hover` 和 `click`，通过 `trigger` 属性设置。

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="通过 trigger 属性设置触发方式"></preview>

## 不同的位置

Dropdown 组件提供了多种不同的弹出位置，通过 `placement` 属性设置。

<preview path="../demo/Dropdown/Placement.vue" title="弹出位置" description="通过 placement 属性设置弹出位置"></preview>

## 禁用选项

可以通过在 `menuOptions` 中设置 `disabled` 属性来禁用某些选项。

<preview path="../demo/Dropdown/Disabled.vue" title="禁用选项" description="通过 disabled 属性禁用某些选项"></preview>

## 分割线

可以通过在 `menuOptions` 中设置 `divided` 属性来添加分割线。

<preview path="../demo/Dropdown/Divided.vue" title="分割线" description="通过 divided 属性添加分割线"></preview>

## 手动控制

通过 `manual` 属性设置为手动控制模式，此时可以通过组件实例的 `show` 和 `hide` 方法手动控制 Dropdown 的显示和隐藏。

<preview path="../demo/Dropdown/Manual.vue" title="手动控制" description="通过 manual 属性和组件实例方法控制显示隐藏"></preview>

## 点击后隐藏

可以通过 `hideAfterClick` 属性设置是否在点击菜单项后隐藏下拉菜单，默认为 `true`。

<preview path="../demo/Dropdown/HideAfterClick.vue" title="点击后隐藏" description="通过 hideAfterClick 属性设置点击后是否隐藏"></preview>

## API

### 属性

| 属性名         | 说明                                      | 类型                | 可选值                                                                                                                                                  | 默认值   |
| -------------- | ----------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| menuOptions    | 下拉菜单选项                              | `MenuOption[]`      | —                                                                                                                                                       | —        |
| trigger        | 触发方式                                  | `string`            | `hover` / `click`                                                                                                                                       | `hover`  |
| placement      | 出现位置                                  | `string`            | `top` / `top-start` / `top-end` / `bottom` / `bottom-start` / `bottom-end` / `left` / `left-start` / `left-end` / `right` / `right-start` / `right-end` | `bottom` |
| manual         | 是否手动控制模式                          | `boolean`           | —                                                                                                                                                       | `false`  |
| popperOptions  | popper.js 的配置项                        | `object`            | —                                                                                                                                                       | —        |
| transition     | 过渡动画名称                              | `string`            | —                                                                                                                                                       | `fade`   |
| openDelay      | 延迟显示，单位毫秒                        | `number`            | —                                                                                                                                                       | `0`      |
| closeDelay     | 延迟关闭，单位毫秒                        | `number`            | —                                                                                                                                                       | `0`      |
| hideAfterClick | 点击菜单项后是否隐藏下拉菜单              | `boolean`           | —                                                                                                                                                       | `true`   |

### MenuOption 类型

| 属性名   | 说明           | 类型               | 可选值 | 默认值  |
| -------- | -------------- | ------------------ | ------ | ------- |
| label    | 选项的标签     | `string` / `VNode` | —      | —       |
| key      | 选项的唯一标识 | `string` / `number`| —      | —       |
| disabled | 是否禁用       | `boolean`          | —      | `false` |
| divided  | 是否显示分割线 | `boolean`          | —      | `false` |

### 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | Dropdown 触发的元素  |

### 事件

| 事件名         | 说明                   | 回调参数                      |
| -------------- | ---------------------- | ----------------------------- |
| visible-change | 显示状态变更时触发     | 显示状态 `boolean`            |
| select         | 选择下拉菜单选项时触发 | 选中的菜单项 `MenuOption`     |

### 实例方法

| 方法名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| show   | 显示下拉菜单   | —    |
| hide   | 隐藏下拉菜单   | —    |