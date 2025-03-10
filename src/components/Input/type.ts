export interface InputProps {
  // 绑定值
  modelValue: string;
  // 类型
  type?: string;
  //   输入框尺寸，只在type不是textarea时有效
  size?: "large" | "small";
  //   是否禁用
  disabled?: boolean;
  // 是否显示清楚按钮，只有当type不是textarea时生效
  clearable?: boolean;
  // 是否显示切换密码图标
  showPassword?: boolean;
}

export interface InputEmits {
  (e: "update:modelValue", value: string): void;
  //   值发生变化
  (e: "input", value: string): void;
  //   值发生变化且失去焦点
  (e: "change", value: string): void;
  (e: "focus", value: FocusEvent): void;
  (e: "blur", value: FocusEvent): void;
  (e: "clear"): void;
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement;
}
