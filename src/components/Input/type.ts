export interface InputProps {
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
  (e: "change", value: string): void;
  (e: "input", value: string): void;
  (e: "focus"): void;
  (e: "blur"): void;
  (e: "clear"): void;
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement;
}
