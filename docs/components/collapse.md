---
title: Collapse | mini-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域，点击面板标题可展开或收缩内容。

## 基础用法

基础的折叠面板，可同时展开多个面板。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse组件的基础用法"></preview>

## 手风琴模式

通过 `accordion` 属性设置为手风琴模式，每次只能展开一个面板。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式" description="通过 accordion 属性设置手风琴模式"></preview>

## 自定义标题

除了可以通过 `title` 属性设置标题外，还可以通过 `title` 插槽自定义标题内容。

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义标题" description="通过 title 插槽自定义标题内容"></preview>

## 禁用状态

通过 `disabled` 属性禁用某个折叠面板。

<preview path="../demo/Collapse/Disabled.vue" title="禁用状态" description="通过 disabled 属性禁用折叠面板"></preview>

## API

### Collapse 属性

| 属性名     | 说明                                                 | 类型       | 可选值 | 默认值  |
| ---------- | ---------------------------------------------------- | ---------- | ------ | ------- |
| modelValue | 当前激活的面板名称，可使用 v-model 双向绑定         | `NameType[]` | —      | —       |
| accordion  | 是否开启手风琴模式，每次只能打开一个面板            | `boolean`  | —      | `false` |

### Collapse 事件

| 事件名 | 说明                                                 | 回调参数                  |
| ------ | ---------------------------------------------------- | ------------------------- |
| change | 当前激活面板改变时触发                               | `(activeNames: NameType[]) => void` |

### CollapseItem 属性

| 属性名   | 说明                                                 | 类型       | 可选值 | 默认值  |
| -------- | ---------------------------------------------------- | ---------- | ------ | ------- |
| name     | 唯一标识符，必填                                     | `string` / `number` | —      | —       |
| title    | 面板标题                                             | `string`   | —      | —       |
| disabled | 是否禁用                                             | `boolean`  | —      | `false` |

### CollapseItem 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 折叠面板的内容       |
| title   | 折叠面板的标题       |