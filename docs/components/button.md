---
title: Button | mini-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button组件的基础用法"></preview>

## 禁用状态

按钮不可用状态，通过 `disabled` 属性设置

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="通过 disabled 属性设置按钮为禁用状态"></preview>

## 按钮尺寸

提供三种不同尺寸的按钮，默认为中等大小，可以通过 `size` 属性设置

<preview path="../demo/Button/Size.vue" title="按钮尺寸" description="通过 size 属性设置按钮大小"></preview>

## 加载状态按钮

通过 `loading` 属性为 `true` 来显示正在加载的状态

<preview path="../demo/Button/Loading.vue" title="按钮样式" description="通过 plain 和 round 属性设置按钮样式"></preview>

## 图标按钮

带图标的按钮可增强按钮的可识别性，使用 `icon` 属性即可，icon 的值请参考 Icon 组件，也可以设置在文字右边的 icon

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="带图标的按钮"></preview>

## API

### 属性

| 属性名     | 说明             | 类型      | 可选值                                                | 默认值 |
| ---------- | ---------------- | --------- | ----------------------------------------------------- | ------ |
| type       | 按钮类型         | `string`  | `primary` / `success` / `warning` / `danger` / `info` | —      |
| size       | 按钮尺寸         | `string`  | `large` / `small`                                     | —      |
| plain      | 是否为朴素按钮   | `boolean` | —                                                     | false  |
| round      | 是否为圆角按钮   | `boolean` | —                                                     | false  |
| circle     | 是否为圆形按钮   | `boolean` | —                                                     | false  |
| loading    | 是否为加载中状态 | `boolean` | —                                                     | false  |
| disabled   | 是否禁用         | `boolean` | —                                                     | false  |
| icon       | 图标类名         | `string`  | —                                                     | —      |
| autofocus  | 是否自动获取焦点 | `boolean` | —                                                     | false  |
| nativeType | 原生 type 属性   | `string`  | `button` / `submit` / `reset`                         | button |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |

### 实例

| 名称 | 说明                | 参数 |
| ---- | ------------------- | ---- |
| ref  | 获取按钮的 DOM 元素 | —    |
