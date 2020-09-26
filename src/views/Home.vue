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
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-code"></use>
      </svg>
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
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>
