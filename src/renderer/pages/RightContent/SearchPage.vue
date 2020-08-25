<template>
  <div>
    <search-header @changeSearchVal="onSearchVal"></search-header>
    <search-result :dataSource="songLists"></search-result>
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader";
import SearchResult from "./SearchResult";

export default {
  components: { SearchHeader, SearchResult },
  data() {
    return {
      songLists: [],
    };
  },
  methods: {
    onSearchVal(val) {
      this.$musicApi.searchSong(val).then((res) => {
        try {
          this.songLists = Object.entries(res.data);
          console.log(this.songLists);
        } catch (err) {
          throw new Error(err);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
