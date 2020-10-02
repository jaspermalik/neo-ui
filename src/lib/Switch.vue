<template>
  <button
    class="neo-switch"
    :class="{ 'neo-checked': value }"
    @click="toggle"
  ><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },

  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.neo-switch {
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
  &.neo-checked {
    background-color: #2ca04c;
  }
  &.neo-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:active{
    >span {width:$h2 + 4px}
  }
  &.neo-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
