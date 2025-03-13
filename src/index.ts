import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { App } from "vue";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Collapse, { CollapseItem } from "@/components/Collapse";
import Dropdown from "@/components/Dropdown";
import Form, { FormItem } from "@/components/Form";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import Message, { createMessage } from "@/components/Message";
import Notification, { createNotification } from "@/components/Notification";
import Select from "@/components/Select";
import Switch from "@/components/Switch";
import Tooltip from "@/components/Tooltip";

import "./styles/index.css";

library.add(fas);

const components = [
  Alert,
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Input,
  Message,
  Notification,
  Select,
  Switch,
  Tooltip,
];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

// 将组件导出，是为了在单独使用组件时，可以按需引入
export {
  install,
  Alert,
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Input,
  Message,
  createMessage,
  Notification,
  createNotification,
  Select,
  Switch,
  Tooltip,
};

export default {
  install,
};

// 将组件声明为全局组件
declare module "vue" {
  export interface GlobalComponents {
    meAlert: typeof Alert;
    meButton: typeof Button;
    meCollapse: typeof Collapse;
    meCollapseItem: typeof CollapseItem;
    meDropdown: typeof Dropdown;
    meForm: typeof Form;
    meFormItem: typeof FormItem;
    meIcon: typeof Icon;
    meInput: typeof Input;
    meMessage: typeof Message;
    meNotification: typeof Notification;
    meSelect: typeof Select;
    meSwitch: typeof Switch;
    meTooltip: typeof Tooltip;
  }
}
