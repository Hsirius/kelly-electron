<template>
  <div class="box"></div>
</template>

<script>
import angry from "../../assets/image/angry.jpeg";
export default {
  name: "love-story",
  data() {
    return {
      dataList: [],
      angry,
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
          name: `这是各种留言和回复1234${i}`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0 15px;
  img {
    width: 100%;
  }
}
</style>
