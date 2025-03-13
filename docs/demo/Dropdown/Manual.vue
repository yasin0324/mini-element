<template>
  <div class="manual block">
    <me-button @click="showDropdown">显示下拉菜单</me-button>
    <me-button @click="hideDropdown" style="margin-left: 10px">隐藏下拉菜单</me-button>
    <div style="margin-top: 10px">
      <me-dropdown :menuOptions="options" manual ref="DropdownRef">
        <me-button>手动控制的下拉菜单</me-button>
      </me-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const DropdownRef = ref(null);
const options = ref([
  {
    label: "选项1",
    key: "1",
  },
  {
    label: "选项2",
    key: "2",
  },
  {
    label: "选项3",
    key: "3",
  },
]);

const showDropdown = () => {
  DropdownRef.value?.show();
};

const hideDropdown = () => {
  DropdownRef.value?.hide();
};
</script>

<style>
.block {
  margin-bottom: 20px;
}
</style>
