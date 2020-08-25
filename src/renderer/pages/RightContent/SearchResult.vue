<template>
  <div class="result-box">
    <el-tabs v-model="defaultActive">
      <el-tab-pane
        v-for="(item, index) in dataSource"
        :label="item[0]"
        :name="String(index)"
        :key="item[0]"
      >
        <div v-for="song in item[1].songs" :key="song.id">
          <span @dblclick="play(song)">{{ song.name }}</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    dataSource: { type: Array },
  },
  data() {
    return {
      defaultActive: "0",
    };
  },
  methods: {
    ...mapMutations(["SET_MUSIC_URL", "SET_MUSIC_INFO"]),

    play(data) {
      this.SET_MUSIC_INFO(data);
      console.log(data);
      this.$musicApi.getSongUrl(data.vendor, data.id).then((res) => {
        try {
          this.SET_MUSIC_URL(res.data.url);
        } catch (err) {
          throw new Error(err);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.result-box {
  padding: 0 15px;
}
</style>
