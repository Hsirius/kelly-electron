<template>
  <div id="app">
    <div class="box">
      <div class="left-bar"><left-content /></div>
      <div class="right-bar">
        <router-view></router-view>
      </div>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import LeftContent from "./pages/LeftBar/LeftContent";
import BottomPlayer from "./components/BottomPlayer";

export default {
  name: "kelly",
  components: { LeftContent, BottomPlayer },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  .box {
    display: flex;
    flex-flow: row nowrap;
    .left-bar {
      width: 20%;
    }
    .right-bar {
      flex: 1;
    }
  }
}
</style>
