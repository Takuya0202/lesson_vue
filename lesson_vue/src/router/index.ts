import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import UserDetail from "../pages/UserDetail.vue";
import { createRouter, createWebHistory } from "vue-router";
import Vuetify from "../pages/Vuetify.vue";

// ルーティング定義
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: UserDetail },
  { path: '/vuetify', component: Vuetify },
]

const router = createRouter({
  // ハッシュルーターかブラウザルーターかを指定する。基本的にブラウザでいいだろう。
  history: createWebHistory(),
  routes
})

export default router
