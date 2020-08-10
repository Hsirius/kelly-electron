<template>
  <div class="left-box">
    <avatar />
    <favorite-playlist />
  </div>
</template>

<script>
import Avatar from "./Avatar";

import FavoritePlaylist from "./FavoritePlaylist";
export default {
  name: "left-sider",
  components: { Avatar, FavoritePlaylist },
};
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.left-box {
  background: $commonBgColor;
  height: 100vh;
}
</style>
