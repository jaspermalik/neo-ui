<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide, watchEffect } from "vue";
import { useWindowClientWidth } from "./utils/useWindowClientWidth";

export default {
  name: "App",
  setup() {
    const asideVisible = ref<boolean>(null);

    const { width } = useWindowClientWidth();

    watchEffect(() => {
      asideVisible.value = width.value <= 500 ? false : true;
    });

    provide("asideVisible", asideVisible);
  },
};
</script>
