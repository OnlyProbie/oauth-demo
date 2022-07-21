import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/Login.vue'
import User from '../view/User.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/user',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router