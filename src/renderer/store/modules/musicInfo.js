const SET_MUSIC_INFO = "SET_MUSIC_INFO";
const SET_MUSIC_URL = "SET_MUSIC_URL";

const state = {
  url: "",
  info: {},
};

const mutations = {
  [SET_MUSIC_INFO](state, info) {
    state.info = info;
  },
  [SET_MUSIC_URL](state, url) {
    state.url = url;
  },
};

const musicInfo = {
  state,
  mutations,
};

export default musicInfo;
