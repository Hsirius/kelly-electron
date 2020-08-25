<template>
  <div class="left-box">
    <avatar></avatar>
    <div class="content">
      <div class="title">在线音乐</div>
      <div
        class="favorite"
        :class="activePath === item.name ? 'active' : ''"
        v-for="item in online"
        :key="item.name"
        @click="toDetail(item.path)"
      >
        <i class="fa" :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </div>
      <div class="title">我的音乐</div>
      <div class="favorite">
        <i class="fa fa-heart-o"></i>
        <span>我喜欢的音乐</span>
      </div>
      <div class="favorite">
        <favorite-playlist></favorite-playlist>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import FavoritePlaylist from "./FavoritePlaylist";
import LoveStory from "./LoveStory";

export default {
  name: "left-sider",
  components: { Avatar, FavoritePlaylist, LoveStory },
  data() {
    return {
      activePath: "",
      online: [
        {
          name: "searchpage",
          title: "搜索",
          icon: "fa-search",
          path: "/searchpage",
        },
        {
          name: "learderboard",
          title: "排行榜",
          icon: "fa-fire",
          path: "/leaderboard",
        },
      ],
    };
  },
  mounted() {
    const { path } = this.$route;
    this.activePath = this.handlePath(path);
  },
  methods: {
    toDetail(path = "/") {
      this.$router.push(path);
      this.activePath = this.handlePath(path);
    },
    handlePath(path) {
      return path.length > 1 ? path.substring(1, path.length) : "search";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.left-box {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background: $commonBgColor;
  height: 100vh;
  .content {
    padding: 0 15px;
    flex: 1;
    .title {
      font-size: 12px;
      padding: 6px 0;
    }
    .favorite {
      padding: 7px;
      margin: 5px 0;
      color: $commonFontColor;
      &:hover {
        background: #dddfe3;
        border-radius: 4px;
      }
    }
    .active {
      background: $commonActive;
      color: #fff;
      border-radius: 4px;
      &:hover {
        background: $commonActive;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}
</style>
