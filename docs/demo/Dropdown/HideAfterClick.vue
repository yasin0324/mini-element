<template>
  <div class="hide-after-click block">
    <div class="row">
      <Dropdown :menuOptions="options" :hideAfterClick="true">
        <Button>点击后隐藏（默认）</Button>
      </Dropdown>
      <Dropdown :menuOptions="options" :hideAfterClick="false">
        <Button>点击后不隐藏</Button>
      </Dropdown>
    </div>
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
    label: "选项2",
    key: "2"
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
.row {
  display: flex;
  gap: 20px;
}
</style>