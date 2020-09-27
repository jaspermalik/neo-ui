<template>
  <article
    class="markdown-body"
    v-html="md"
  >
  </article>
</template>

<script lang="ts">
//@ts-ignore
import md from "../markdown/install.md";
export default {
  data() {
    return {
      md,
    };
  },
};
</script>

<style>
</style>
