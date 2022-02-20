import { views } from "./views.js"

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: views,
})
