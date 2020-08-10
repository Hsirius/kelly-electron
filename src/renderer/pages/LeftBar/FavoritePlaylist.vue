<template>
  <div class="box">
    <playlist title="收藏的歌单" :dataList="dataList"></playlist>
  </div>
</template>

<script>
import Playlist from "../../components/Playlist";

export default {
  name: "favorite-playlist",
  components: { Playlist },
  data() {
    return {
      activeIndex: 0,
      dataList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      for (let i = 0; i < 3; i += 1) {
        this.dataList.push({
          id: i,
          name: `歌单名称${i}`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.box {
  padding: 0 15px;
}
</style>
