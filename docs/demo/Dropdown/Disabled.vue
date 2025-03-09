<template>
  <div class="disabled block">
    <Dropdown :menuOptions="options">
      <Button>带禁用选项的下拉菜单</Button>
    </Dropdown>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import { ref } from "vue";

const options = ref([
  {
    label: "选项1",
    key: "1"
  },
  {
    label: "选项2 (禁用)",
    key: "2",
    disabled: true
  },
  {
    label: "选项3",
    key: "3"
  }
]);
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>