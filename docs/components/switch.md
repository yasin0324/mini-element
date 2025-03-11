---
title: Switch | mini-Element
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

<preview path="../demo/Switch/Basic.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

<preview path="../demo/Switch/Disabled.vue" title="禁用状态" description="通过 disabled 属性设置开关为禁用状态"></preview>

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

<preview path="../demo/Switch/Text.vue" title="文字描述" description="带有文字描述的开关"></preview>

## 不同尺寸

通过设置 `size` 属性为 `large` 或 `small` 来调整开关的大小。

<preview path="../demo/Switch/Size.vue" title="不同尺寸" description="提供大、默认、小三种尺寸的开关"></preview>

## 自定义值

可以设置 `active-value` 和 `inactive-value` 属性，它们接受 `Boolean`、`String` 或 `Number` 类型的值。

<preview path="../demo/Switch/CustomValue.vue" title="自定义值" description="设置开关的自定义值"></preview>

## API

### 属性

| 属性名         | 说明                      | 类型                       | 可选值         | 默认值  |
| -------------- | ------------------------- | -------------------------- | -------------- | ------- |
| modelValue     | 绑定值                    | `boolean / string / number` | —              | —       |
| disabled       | 是否禁用                  | `boolean`                  | —              | `false` |
| size           | 开关的尺寸                | `string`                   | `large / small` | —       |
| active-value   | switch 打开时的值         | `boolean / string / number` | —              | `true`  |
| inactive-value | switch 关闭时的值         | `boolean / string / number` | —              | `false` |
| active-text    | switch 打开时的文字描述   | `string`                   | —              | —       |
| inactive-text  | switch 关闭时的文字描述   | `string`                   | —              | —       |
| name           | switch 对应的 name 属性   | `string`                   | —              | —       |

### 事件

| 事件名 | 说明                           | 回调参数                    |
| ------ | ------------------------------ | --------------------------- |
| change | switch 状态发生变化时的回调函数 | 新状态的值                  |

### 实例

| 名称     | 说明                | 参数 |
| -------- | ------------------- | ---- |
| inputRef | 获取开关的 DOM 元素 | —    |