<template>
  <div id="app">
    <div class="box">
      <div class="left-bar"><left-content /></div>
      <div class="right-bar">
        <router-view></router-view>
      </div>
    </div>
    <div class="bottom">
      <div class="bot-content">
        bottom
      </div>
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
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    border-top: 2px solid red;
    .bot-content {
      padding: 10px;
      height: 40px;
    }
  }
}
</style>
