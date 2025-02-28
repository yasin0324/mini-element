<template>
  <i class="me-icon" :class="{ [`me-icon--${type}`]: type }" :style="customStyles">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { omit } from "lodash-es";
import { type IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineOptions({
  name: "meIcon",
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>
