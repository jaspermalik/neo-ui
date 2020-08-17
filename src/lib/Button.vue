<template>
  <button
    class="neo-button"
    :class="classes"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: { type: String, default: "button" },
    size: { type: String, default: "normal" },
    level: { type: String, default: "normal" },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`neo-theme-${theme}`]: theme,
        [`neo-size-${size}`]: size,
        [`neo-level-${level}`]: level,
      };
    });
    return {
      classes,
    };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #1b68fa;
$red: #da1e28;
$radius: 4px;
.neo-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: #fff;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.neo-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.neo-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.neo-theme-button {
    &.neo-level-main {
      background-color: $blue;
      color: #fff;
      border-color: $blue;
      &:hover,
      &.focus {
        background-color: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.neo-level-danger {
      background-color: $red;
      color: #fff;
      border-color: $red;
      &:hover,
      &.focus {
        background-color: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.neo-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
    &.neo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.neo-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background-color: darken(white, 5%);
    }
    &.neo-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.neo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
}
</style>
