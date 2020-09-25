<template>
  <div>
    Dialog实例
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :ok="fn1"
      :cancel="fn2"
    >
      <template v-slot:title><strong>标题</strong></template>
      <template v-slot:content>
        <div>Hello</div>
        <div>World</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      console.log("ok");
      return true;
    };
    const fn2 = () => {
      console.log("cancel");
      return false;
    };
    return { x, toggle, fn1, fn2 };
  },
};
</script>
