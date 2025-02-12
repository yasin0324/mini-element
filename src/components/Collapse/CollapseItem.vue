<template>
  <div
    class="me-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="me-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <Transition name="slide">
      <div class="me-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import { collapseContextKey, type CollapseItemProps } from "./type";

defineOptions({
  name: "meCollapseItem",
});
const props = defineProps<CollapseItemProps>();
const collapseContext = inject(collapseContextKey);
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name));
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};
</script>
