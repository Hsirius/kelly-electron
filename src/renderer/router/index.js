import Vue from "vue";
import Router from "vue-router";

const SearchPage = () => import("../pages/RightContent/SearchPage.vue");
const PlaylistPanel = () => import("../components/PlaylistPanel.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SearchPage",
      component: SearchPage,
    },
    {
      path: "/searchpage",
      name: "SearchPage",
      component: SearchPage,
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
