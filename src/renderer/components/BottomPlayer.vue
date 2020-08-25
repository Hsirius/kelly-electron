<template>
  <div class="bottom">
    <div class="bot-content">
      <audio :src="url" ref="audio" @timeupdate="onTimeUpdate"></audio>
      <section class="info-box">
        <img :src="info.album.cover" :alt="info.album.name" class="cover" />
        <div class="info">
          <p>
            <span>{{ info.name }}</span> -
            <span class="singer">{{ info.artists[0].name }}</span>
          </p>
          <p class="time">
            <span>{{ currentTime }}</span> / <span>{{ duration }}</span>
          </p>
        </div>
      </section>
      <section class="control-box">
        <i class="fa fa-step-backward"></i>
        <i class="fa fa-play" v-if="paused" @click="play"></i>
        <i class="fa fa-pause" v-else @click="play"></i>
        <i class="fa fa-step-forward"></i>
      </section>
      <section class="other-box">
        <i class="fa fa-volume-up"></i>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      audio: "",
      paused: true,
      duration: "",
      currentTime: "00:00",
    };
  },
  mounted() {
    this.audio = this.$refs.audio;
  },
  watch: {
    audio(val) {
      this.paused = val.paused;
      val.oncanplay = () => {
        this.duration = this.transTime(val.duration);
      };
    },
  },
  computed: {
    ...mapState({
      url: (state) => state.musicInfo.url,
      info: (state) => state.musicInfo.info,
    }),
  },
  methods: {
    play() {
      if (this.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
      this.paused = !this.paused;
    },
    onTimeUpdate() {
      this.currentTime = this.transTime(this.audio.currentTime);
    },
    transTime(time) {
      const duration = parseInt(time, 10);
      const isM0 = ":";
      let minute = parseInt(duration / 60, 10);
      let sec = String(duration % 60);
      if (minute === 0) {
        minute = "00";
      } else if (minute < 10) {
        minute = `0${minute}`;
      }
      if (sec.length === 1) {
        sec = `0${sec}`;
      }
      return minute + isM0 + sec;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.scss";

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  border-top: 2px solid $commonActive;
  .bot-content {
    position: relative;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .info-box {
      height: 40px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .cover {
        width: 38px;
        height: 100%;
        margin-right: 10px;
      }
      .info {
        .singer {
          font-size: 12px;
          color: #89909e;
        }
        .time {
          font-size: 12px;
          color: #89909e;
        }
      }
    }
    .control-box {
      width: 200px;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      color: $commonActive;
      font-size: 20px;
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
