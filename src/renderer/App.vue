<template>
  <div id="app">
    <div class="left-bar"><left-content /></div>
    <div class="right-bar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftContent from "./pages/LeftBar/LeftContent";
export default {
  name: "kelly",
  components: { LeftContent },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-flow: row nowrap;
  .left-bar {
    width: 30%;
  }
  .right-bar {
    flex: 1;
  }
}
</style>
