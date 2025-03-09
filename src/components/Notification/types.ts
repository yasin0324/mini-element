import type { ComponentInternalInstance, VNode } from "vue";

export interface NotificationProps {
  title: string;
  message: string | VNode;
  type?: "success" | "info" | "warning" | "danger";
  showClose?: boolean;
  duration?: number;
  icon?: string;
  offset?: number;
  id: string;
  zIndex: number;
  onDestroy: () => void;
}

export type CreateNotificationProps = Omit<NotificationProps, "id" | "zIndex" | "onDestroy">;

export interface NotificationContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: NotificationProps;
  close: () => void;
}
