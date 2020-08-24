import Vue from "vue";
import Router from "vue-router";

const SearchResult = () => import("../pages/RightContent/SearchResult.vue");
const PlaylistPanel = () => import("../components/PlaylistPanel.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SearchResult",
      component: SearchResult,
    },
    {
      path: "/search",
      name: "SearchResult",
      component: SearchResult,
    },
    {
      path: "/playlist/:playlistId",
      name: "PlaylistPanel",
      component: PlaylistPanel,
    },
  ],
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
