---
title: Select | mini-Element
description: Select 组件的文档
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

基础的选择器用法，通过 `options` 属性设置选项数据。

<preview path="../demo/Select/Basic.vue" title="基础用法" description="Select组件的基础用法"></preview>

## 禁用状态

选择器不可用状态，通过 `disabled` 属性设置。

<preview path="../demo/Select/Disabled.vue" title="禁用状态" description="通过 disabled 属性设置禁用状态"></preview>

## 可清空选择

包含清空按钮，可将选择器清空为初始状态，通过 `clearable` 属性设置。

<preview path="../demo/Select/Clearable.vue" title="可清空" description="通过 clearable 属性设置可清空"></preview>

## 可筛选

可以通过输入过滤选项，通过 `filterable` 属性开启筛选功能。

<preview path="../demo/Select/Filterable.vue" title="可筛选" description="通过 filterable 属性开启筛选功能"></preview>

## 自定义筛选

通过 `filterMethod` 自定义筛选方法。

<preview path="../demo/Select/CustomFilter.vue" title="自定义筛选" description="通过 filterMethod 自定义筛选方法"></preview>

## 远程搜索

从服务器搜索数据，通过 `remote` 和 `remoteMethod` 实现。

<preview path="../demo/Select/Remote.vue" title="远程搜索" description="通过 remote 和 remoteMethod 实现远程搜索"></preview>

## 自定义模板

可以自定义备选项的显示内容，通过 `renderLabel` 属性设置。

<preview path="../demo/Select/CustomTemplate.vue" title="自定义模板" description="通过 renderLabel 自定义选项内容"></preview>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 选中项绑定值 | `string` | — | — |
| options | 选项数据 | `SelectOption[]` | — | `[]` |
| placeholder | 占位文本 | `string` | — | — |
| disabled | 是否禁用 | `boolean` | — | `false` |
| clearable | 是否可以清空选项 | `boolean` | — | `false` |
| filterable | 是否可搜索 | `boolean` | — | `false` |
| filterMethod | 自定义搜索方法 | `(value: string) => SelectOption[]` | — | — |
| remote | 是否为远程搜索 | `boolean` | — | `false` |
| remoteMethod | 远程搜索方法 | `(value: string) => Promise<SelectOption[]>` | — | — |
| renderLabel | 自定义选项渲染函数 | `(option: SelectOption) => VNode` | — | — |

### SelectOption 类型

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 选项的标签 | `string` | — | — |
| value | 选项的值 | `string` | — | — |
| disabled | 是否禁用该选项 | `boolean` | — | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | 选中值 `string` |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 `true`，隐藏则为 `false` |
| clear | 可清空的选择器点击清空按钮时触发 | — |