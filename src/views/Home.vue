<template>
  <div>
    <div class="topnav-banner">
      <Topnav />
      <div class="banner">
        <h1>Neo-UI</h1>
        <h2>一个UI框架</h2>
        <p class="actions">
          <a href="https://github.com/jaspermalik/neo-ui">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="featrues">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于Vue3</h3>
          <p>使用了Vue3的新特性Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于TypeScript</h3>
          <p>源代码采用TypeScript书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topnav-banner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 58%,
    rgba(204, 244, 241, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      display: inline-block;
      padding: 8px 24px;
      color: white;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

.featrues {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: "icon title" "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
