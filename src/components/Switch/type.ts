type ModelValueType = boolean | string | number;

export interface SwitchProps {
  // 绑定值，必须等于active-value或inactive-value，默认为Boolean类型
  modelValue: ModelValueType;
  // switch大小
  size?: "small" | "large";
  //   是否禁用
  disabled?: boolean;
  // switch状态为on时的值
  activeValue: ModelValueType;
  // switch状态为off时的值
  inactiveValue: ModelValueType;
  //   switch打开时的文字描述
  activeText?: string;
  // switch的状态为off时的文字描述
  inactiveText?: string;
  // switch对应的name属性
  name?: string;
}

export interface SwitchEmits {
  (e: "change", value: ModelValueType): void;
  (e: "update:modelValue", value: ModelValueType): void;
}
