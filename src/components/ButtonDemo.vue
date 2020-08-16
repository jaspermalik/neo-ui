<template>
  <div>
    <div>Button 示例</div>
    <h1>示例</h1>
    <div>
      <Button
        @click="onClick"
        @focus="onClick"
        @mousemove="onClick"
        size="small"
        level="normal"
        disabled
      >你好</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return {
      onClick,
    };
  },
};
</script>
