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
    <h2>示例2</h2>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "你好",
        content: "Hello world",
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
        closeOnClickOverlay: false,
      });
    };
    return { x, toggle, fn1, fn2, showDialog };
  },
};
</script>
