<template>
  <div class="box">
    <div class="title">
      <p @click="toggleShow">
        <i v-if="!showFlag" class="el-icon-caret-right"></i>
        <i v-else class="el-icon-caret-bottom"></i>
        <span>收藏的歌单</span>
      </p>
      <i class="el-icon-plus" @click="addNewPlaylist"></i>
    </div>
    <ul :class="showFlag ? 'show' : 'hide'">
      <li
        v-for="(item, index) in dataList"
        :key="item.id"
        class="list-item"
        @click="toDetail(item)"
        :class="activeIndex === index ? 'active' : ''"
      >
        <i class="fa fa-diamond"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "favorite-playlist",
  data() {
    return {
      showFlag: false,
      activeIndex: 0,
      dataList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    toggleShow() {
      this.showFlag = !this.showFlag;
    },
    addNewPlaylist() {
      this.$prompt("请输入新歌单标题", "新建歌单", {
        confirmButtonText: "创建",
      })
        .then(({ value }) => {
          console.log(value);
          this.$message({
            type: "success",
            message: "创建成功",
          });
        })
        .catch(() => {});
    },
    toDetail(item) {
      this.activeIndex = item.id;
      this.$router.push(`/playlist/${item.id}`);
    },
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
@import "../../assets/css/common.scss";

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  padding: 0 13px;
  .list-item {
    padding: 6px 0;
  }
  .active {
    color: $commonActive;
  }
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
