<template>
  <div class="box">
    <section class="header">
      <el-input
        placeholder="请输入内容"
        v-model="searchVal"
        class="input-with-select"
        @keyup.enter.native="search"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
      <div class="temp-box">
        <span class="temp">{{ nowWeather.temp }}℃</span>
        <img :src="imgUrl" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import weatherPath from "../../service/weather/index";

export default {
  name: "search-result",
  data() {
    return {
      searchVal: "",
      nowWeather: {},
      imgUrl: "",
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      axios.get(weatherPath).then((res) => {
        this.nowWeather = res.data.now;
        this.imgUrl = `../../../static/weather/${this.nowWeather.icon}.png`;
      });
    },
    search() {
      console.log(this.searchVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0 15px;
  .header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    .input-with-select {
      width: 40%;
    }
    .temp-box {
      display: flex;
      align-items: center;
      margin-left: 60px;
      .temp {
        margin-right: 10px;
      }
      img {
        width: 30px;
      }
    }
  }
}
</style>
