---
title: Form | mini-Element
description: Form 组件的文档
---

# Form 表单

表单包含输入框、单选框、下拉选择、多选框等用户输入的组件。使用表单，您可以收集、验证和提交数据。

## 基础用法

最基础的表单包括各种输入表单项，比如 `input`、`select` 等。在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

<preview path="../demo/Form/Basic.vue" title="基础用法" description="基础的表单使用示例"></preview>

## 表单校验

`Form` 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。只需为 `rules` 属性传入约定的验证规则，并将 `form-Item` 的 `prop` 属性设置为需要验证的特殊键值即可。更多高级用法可参考 `async-validator`。

<preview path="../demo/Form/Validate.vue" title="表单校验" description="使用验证规则的表单示例"></preview>

## 自定义校验规则

除了使用内置的校验规则外，还可以通过自定义验证规则来完成更复杂的表单验证。这个例子展示了如何使用自定义验证规则来完成密码的二次验证。

<preview path="../demo/Form/CustomValidate.vue" title="自定义校验规则" description="使用自定义校验规则的表单示例"></preview>

## API

### Form 属性

| 属性名 | 说明         | 类型                                                                                                         | 默认值 |
| :----- | :----------- | :----------------------------------------------------------------------------------------------------------- | :----- |
| model  | 表单数据对象 | `Record<string, any>`                                                                                        | —      |
| rules  | 表单验证规则 | [RuleItem](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts) `& { trigger?: string}` | —      |

### Form 插槽

| 插槽名  | 说明       | 子标签   |
| :------ | :--------- | :------- |
| default | 自定义内容 | FormItem |

### Form 方法

| 名称          | 说明                                             | 类型                         |
| :------------ | :----------------------------------------------- | :--------------------------- |
| validate      | 对整个表单的内容进行验证                         | `() => Promise<any>`         |
| resetFields   | 重置该表单项，将其值重置为初始值，并移除校验结果 | `(props?: string[]) => void` |
| clearValidate | 清理某个字段的表单验证信息                       | `(props?: string[]) => void` |

### FormItem 属性

| 属性名 | 说明                                                                          | 类型     | 默认值 |
| :----- | :---------------------------------------------------------------------------- | :------- | :----- |
| label  | 标签文本                                                                      | `string` | —      |
| prop   | `model` 的键名。在使用了 `validate`、`resetFields` 的方法时，该属性是必填的   | `string` | —      |

### FormItem 插槽

| 插槽名  | 说明               | 子标签            |
| :------ | :----------------- | :---------------- |
| default | 表单项的内容       | —                 |
| label   | 标签位置显示的内容 | `{label: string}` |

### FormItem 方法

| 名称           | 说明                                                 | 类型                                                                           |
| :------------- | :--------------------------------------------------- | :----------------------------------------------------------------------------- |
| validate       | 验证表单项                                           | `(trigger?: string) => Promise<any>`                                          |
| resetField     | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | `() => void`                                                                   |
| clearValidate  | 移除该表单项的校验结果                               | `() => void`                                                                   |
| validateStatus | 校验数据                                             | `{state: 'init' \| 'success' \| 'error'; errorMsg: string; loading: boolean;}` |
