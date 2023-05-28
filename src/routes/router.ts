import * as vRoute from "vue-router";
import HomePage from "@/components/HomePage.vue";
import NotFoundPageVue from "@/pages/NotFoundPage.vue";

const _routes: Array<vRoute.RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/notfound",
    component: NotFoundPageVue,
  },
];

const router = vRoute.createRouter({
  history: vRoute.createWebHistory(),
  routes: _routes,
});

export default router;
