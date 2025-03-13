<template>
  <form class="me-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
defineOptions({
  name: "meForm",
});
</script>
