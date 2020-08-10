<template>
  <div>
    <div class="title">
      <p @click="toggleList">
        <i v-if="!showFlag" class="el-icon-caret-right"></i>
        <i v-else class="el-icon-caret-bottom"></i>
        <span>{{ title }}</span>
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
        <i class="el-icon-ice-tea"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "playlist",
  props: {
    title: { type: String },
    dataList: { type: Array },
  },
  data() {
    return {
      activeIndex: 0,
      showFlag: false,
    };
  },
  methods: {
    toggleList() {
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
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #89909e;
  padding: 6px;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.list-item {
  padding: 5px 0 5px 19px;
}
.active {
  color: #c20c0c;
}
</style>
