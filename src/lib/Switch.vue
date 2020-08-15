<template>
  <button :class="{ checked }" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);

    const toggle = () => {
      checked.value = !checked.value;
    };

    return {
      checked,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: gray;
  border-radius: $h / 2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2 / 2;
    transition: left ease-out 250ms;
  }
  &:focus {
    outline: none;
  }
  &.checked {
    background-color: cadetblue;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
