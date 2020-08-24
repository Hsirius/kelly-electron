<template>
  <div class="title">{{ playlistId }}</div>
</template>

<script>
export default {
  name: "playlist-panel",
  props: {
    title: { type: String },
    showPlusIcon: { type: Boolean },
  },
  data() {
    return {
      playlistId: 0,
    };
  },
  watch: {
    $route(to) {
      this.playlistId = to.params.playlistId;
    },
  },
  methods: {},
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
</style>
