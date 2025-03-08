---
title: Message | mini-Element
description: Message 组件的文档
---

# Message 消息提示

用于页面中展示操作反馈信息

## 基础用法

Message 在顶部居中显示，并自动消失。注册了一个 `createMessage` 方法用于调用。Message 可以接受以一个字符串或一个 `VNode` 作为参数，它会被显示为正文内容。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message组件的基础用法"></preview>

## 不同类型

Message 组件提供了四种不同的类型，用来显示「成功、警告、消息、错误」类的操作反馈。设置 `type` 字段可定义不同的状态，默认为 `info`。

<preview path="../demo/Message/Types.vue" title="不同类型" description="不同类型的消息提示"></preview>

## 可关闭的消息提示

可以添加关闭按钮

默认的 Message 是不可以被人工关闭的，通过设置 `showClose` 属性为 `true` 可以启用关闭功能。

<preview path="../demo/Message/Closable.vue" title="可关闭的消息提示" description="可以关闭的消息提示"></preview>

## 自定义显示时间

通过设置 `duration` 属性可以自定义消息显示时间。默认为 3000 毫秒，设置为 0 则不会自动关闭。

<preview path="../demo/Message/Duration.vue" title="自定义显示时间" description="自定义消息显示时间"></preview>

## API

### 属性

使用 `createMessage` 创建消息，它接受一个 `Object`，以下是 `Object` 中的属性列表。

| 属性名         | 说明                                        | 类型               | 可选值                                    | 默认值    |
| -------------- | ------------------------------------------- | ------------------ | ----------------------------------------- | --------- |
| message        | 消息文本                                    | `string` / `VNode` | —                                         | —         |
| type           | 消息类型                                    | `string`           | `success` / `warning` / `info` / `danger` | `info`    |
| duration       | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number`           | —                                         | `3000`    |
| showClose      | 是否显示关闭按钮                            | `boolean`          | —                                         | `false`   |
| offset         | 消息距离顶部/上一个 Message 的偏移量        | `number`           | —                                         | `20`      |
| transitionName | 动画名称                                    | `string`           | -                                         | `fade-up` |

### 方法

调用 createMessage 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 destroy 方法。

| 方法名  | 说明               | 参数 |
| ------- | ------------------ | ---- |
| destory | 关闭当前的消息实例 | —    |
