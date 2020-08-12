<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide, watchEffect, Ref } from "vue";

export default {
  name: "App",
  setup() {
    const width = ref<Ref<number>>(null);
    const asideVisible = ref<Ref<boolean>>(null);

    function handleResize() {
      width.value = document.documentElement.clientWidth;
    }

    window.addEventListener("resize", handleResize);

    watchEffect(() => {
      asideVisible.value = width.value <= 500 ? false : true;
    });

    provide("asideVisible", asideVisible);
  },
};
</script>
