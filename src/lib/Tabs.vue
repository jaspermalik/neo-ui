<template>
  <div class="neo-tabs">
    <div
      class="neo-tabs-nav"
      ref="container"
    >
      <div
        v-for="(t,index) in titles"
        :key="index"
        class="neo-tabs-nav-item"
        :class="{selected: t === selected}"
        @click="select(t)"
        :ref="el => {if(selected === t) selectedItem = el}"
      >{{t}}</div>
      <div
        class="neo-tabs-nav-indicator"
        ref="indicator"
      ></div>
    </div>
    <div class="neo-tabs-content">
      <component
        :is="current"
        :key="selected"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(
        () => {
          const {
            width,
            left: left2,
          } = selectedItem.value.getBoundingClientRect();
          const { left: left1 } = container.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const left = left2 - left1;
          indicator.value.style.left = left + "px";
        },
        { flush: "post" }
      );
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });

    const current = computed(() =>
      defaults.find((tag) => tag.props.title === props.selected)
    );

    const titles = defaults.map((tag) => tag.props.title);

    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #1b68fa;
$color: #161616;
$border-color: #e0e0e0;
.neo-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 0;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
