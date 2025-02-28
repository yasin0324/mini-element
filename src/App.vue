<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import type { ButtonInstance } from "./components/Button/types";
import { onMounted, ref } from "vue";
const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value);
  }
});

const openedValue = ref(["a"]);
</script>

<template>
  <Icon icon="arrow-up" size="2xl" type="danger" spin color="#EA333D" />
  <div>
    <Button ref="buttonRef">Test Button</Button>
  </div>
  <div>
    <Button>Default</Button>
    <Button type="primary" icon="search">Primary</Button>
    <Button type="success" loading>Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>

  <div>
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </div>

  <div>
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </div>

  <div>
    <Collapse v-model="openedValue">
      <CollapseItem name="a">
        <template #title>
          <h1>Title A</h1>
        </template>
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B"> <div>this is bbbbb test</div></CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div>this is ccc test</div>
      </CollapseItem>
    </Collapse>
    {{ openedValue }}
  </div>
</template>

<style scoped></style>
