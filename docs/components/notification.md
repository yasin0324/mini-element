---
title: Notification | mini-Element
description: Notification 组件的文档
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

Notification 在页面右上角显示，并自动消失。组件注册了一个 `createNotification` 方法用于调用。Notification 可以接受一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="../demo/Notification/Basic.vue" title="基础用法" description="Notification组件的基础用法"></preview>

## 不同类型

Notification 组件提供了四种不同的类型，用来显示「成功、警告、消息、错误」类的系统消息。通过设置 `type` 字段可以定义不同的状态，默认为 `info`。

<preview path="../demo/Notification/Types.vue" title="不同类型" description="不同类型的通知提醒"></preview>

## 自定义图标

通过设置 `icon` 属性自定义图标，图标名称请参考 Icon 组件。

<preview path="../demo/Notification/CustomIcon.vue" title="自定义图标" description="可自定义图标的通知"></preview>

## 带有关闭按钮

默认的 Notification 是可以被人工关闭的，如果不想要关闭按钮，可以设置 `showClose` 属性为 `false`。

<preview path="../demo/Notification/Closable.vue" title="带有关闭按钮" description="可以关闭的通知"></preview>

## 自定义显示时间

通过设置 `duration` 属性可以自定义通知的显示时间。默认为 3000 毫秒，设置为 0 则不会自动关闭。

<preview path="../demo/Notification/Duration.vue" title="自定义显示时间" description="自定义通知显示时间"></preview>

## API

### 属性

使用 `createNotification` 创建通知，它接受一个 `Object`，以下是 `Object` 中的属性列表。

| 属性名    | 说明                                        | 类型               | 可选值                                    | 默认值  |
| --------- | ------------------------------------------- | ------------------ | ----------------------------------------- | ------- |
| title     | 通知标题                                    | `string`           | —                                         | —       |
| message   | 通知内容                                    | `string` / `VNode` | —                                         | —       |
| type      | 通知类型                                    | `string`           | `success` / `warning` / `info` / `danger` | `info`  |
| duration  | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number`           | —                                         | `3000`  |
| showClose | 是否显示关闭按钮                            | `boolean`          | —                                         | `true`  |
| offset    | 通知距离顶部的偏移量                        | `number`           | —                                         | `20`    |
| icon      | 自定义图标                                  | `string`           | —                                         | —       |

### 方法

调用 `createNotification` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| close  | 关闭当前的通知实例 | —    |