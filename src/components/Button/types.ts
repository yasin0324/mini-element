import type { PropType } from "vue";
export type ButtonType = "primary" | "danger" | "info" | "success" | "warning";
export type ButtonSize = "small" | "large";
export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  autofocus?: boolean;
}

export interface ButtonInstance {
  ref: HTMLButtonElement;
}

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
  },
  size: {
    type: String as PropType<ButtonSize>,
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
};
