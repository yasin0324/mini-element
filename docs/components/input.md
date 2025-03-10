---
title: Input | mini-Element
description: Input 组件的文档
---

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<preview path="../demo/Input/Basic.vue" title="基础用法" description="Input 基础用法"></preview>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<preview path="../demo/Input/Disabled.vue" title="禁用状态" description="通过 disabled 属性指定是否禁用 input 组件"></preview>

## 可清空

使用`clearable`属性即可得到一个可清空的输入框

<preview path="../demo/Input/Clearable.vue" title="可清空" description="使用clearable属性即可得到一个可清空的输入框"></preview>

## 密码框

使用`show-password`属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码框" description="使用show-password属性即可得到一个可切换显示隐藏的密码框"></preview>

## 带图标的输入框

带有图标标记输入类型

<preview path="../demo/Input/Icon.vue" title="带图标的输入框" description="通过 prefix-icon 和 suffix-icon 属性可以在输入框前后添加图标"></preview>

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

<preview path="../demo/Input/Textarea.vue" title="文本域" description="用于输入多行文本信息"></preview>

## 复合型输入框

可前置或后置元素，一般为标签或按钮

<preview path="../demo/Input/Slots.vue" title="复合型输入框" description="可前置或后置元素，一般为标签或按钮"></preview>

## 尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项：`large`, `small`。

<preview path="../demo/Input/Size.vue" title="不同尺寸" description="使用size属性改变输入框大小"></preview>

## API

### 属性

| 属性名        | 说明                 | 类型      | 可选值                  | 默认值  |
| ------------- | -------------------- | --------- | ----------------------- | ------- |
| type          | 类型                 | `string`  | `text` / `textarea`     | `text`  |
| modelValue    | 绑定值               | `string`  | —                       | —       |
| size          | 输入框尺寸           | `string`  | `large` / `small`       | —       |
| disabled      | 是否禁用             | `boolean` | —                       | `false` |
| clearable     | 是否可清空           | `boolean` | —                       | `false` |
| showPassword  | 是否显示切换密码图标 | `boolean` | —                       | `false` |
| placeholder   | 输入框占位文本       | `string`  | —                       | —       |
| readonly      | 原生 readonly 属性   | `boolean` | —                       | `false` |
| autocomplete  | 原生 autocomplete 属性 | `string`  | `on` / `off`            | `off`   |
| autofocus     | 原生 autofocus 属性  | `boolean` | —                       | `false` |
| form          | 原生 form 属性       | `string`  | —                       | —       |

### 插槽

| 插槽名   | 说明                   |
| -------- | ---------------------- |
| prefix    | 输入框头部内容         |
| suffix    | 输入框尾部内容         |
| prepend   | 输入框前置内容         |
| append    | 输入框后置内容         |

### 事件

| 事件名  | 说明                                          | 回调参数                     |
| ------- | --------------------------------------------- | ---------------------------- |
| input   | 在 Input 值改变时触发                         | `(value: string)`            |
| change  | 仅在输入框失去焦点或用户按下回车时触发        | `(value: string)`            |
| focus   | 在 Input 获得焦点时触发                       | `(event: FocusEvent)`        |
| blur    | 在 Input 失去焦点时触发                       | `(event: FocusEvent)`        |
| clear   | 在点击由 clearable 属性生成的清空按钮时触发    | —                            |

### 实例

| 名称 | 说明                | 参数 |
| ---- | ------------------- | ---- |
| ref  | 获取输入框的 DOM 元素 | —    |