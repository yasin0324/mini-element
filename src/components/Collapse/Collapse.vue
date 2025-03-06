<template>
  <div class="me-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from "vue";
import { collapseContextKey, type NameType, type CollapseProps, type CollapseEmits } from "./types";

defineOptions({
  name: "meCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref<NameType[]>(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue;
  }
);
if (props.accordion && activeNames.value.length > 1) {
  console.warn("accordion mode should only have one active item");
}
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? "" : item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      // 存在，删除数组对应的一项
      activeNames.value.splice(index, 1);
    } else {
      // 不存在，插入对应的name
      activeNames.value.push(item);
    }
  }
  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
