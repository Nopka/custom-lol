import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/custom',
    name: 'custom-game',
    component: () => import('../views/CustomGame.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
