import * as vRoute from "vue-router";
import TemplateVue from "@/components/template/Template.vue";

const _routes: Array<vRoute.RouteRecordRaw> = [
  {
    path: "/",
    component: TemplateVue,
  },
];

const router = vRoute.createRouter({
  history: vRoute.createWebHistory(),
  routes: _routes,
});

export default router;
