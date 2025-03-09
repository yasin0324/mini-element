import { h, render, shallowReactive } from "vue";
import type { CreateNotificationProps, NotificationContext } from "./types";
import Notification from "./Notification.vue";
import useZIndex from "@/hooks/useZIndex";

let seed = 1;
const instances: NotificationContext[] = shallowReactive([]);

export const createNotification = (props: CreateNotificationProps) => {
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  /** 实例销毁 */
  const destroy = () => {
    // 从实例中删除
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx === -1) {
      return;
    }
    instances.splice(idx, 1);
    render(null, container);
  };

  // 手动删除 把 Notification 组件暴露的 visible 置为 false
  const manualDestroy = () => {
    const instance = instances.find((item) => item.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };

  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  };
  const vnode = h(Notification, newProps);

  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const instance = {
    id,
    vnode,
    vm,
    close: manualDestroy,
    props: newProps,
  };
  instances.push(instance);

  return instance;
};

/** 获取上一个实例的 bottom */
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  }
  return instances[idx - 1].vm.exposed!.bottomOffset.value;
};
