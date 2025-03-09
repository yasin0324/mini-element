<template>
  <div class="manual block">
    <Button @click="showDropdown">显示下拉菜单</Button>
    <Button @click="hideDropdown" style="margin-left: 10px">隐藏下拉菜单</Button>
    <div style="margin-top: 10px">
      <Dropdown :menuOptions="options" manual ref="dropdownRef">
        <Button>手动控制的下拉菜单</Button>
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import { ref } from "vue";

const dropdownRef = ref(null);
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

const showDropdown = () => {
  dropdownRef.value?.show();
};

const hideDropdown = () => {
  dropdownRef.value?.hide();
};
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>