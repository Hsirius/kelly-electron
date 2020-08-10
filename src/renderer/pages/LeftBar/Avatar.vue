<template>
  <div class="avatar-box">
    <div class="avatar-content">
      <el-avatar
        :size="40"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        class="avatar"
      ></el-avatar>
      <span>{{ nickName }}</span>
    </div>
    <i class="el-icon-edit edit"></i>
  </div>
</template>

<script>
export default {
  name: "avatar",
  data() {
    return {
      nickName: "他好像一条狗呀",
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  min-height: 60px;
  .avatar-content {
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 10px;
    }
    .edit {
      float: right;
    }
  }
}
:hover {
  cursor: pointer;
}
</style>
