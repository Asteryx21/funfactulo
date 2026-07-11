import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../login.vue'
import Signup from '../signup.vue'
import Game from '../Game.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/game',
      component: Game
    }
  ]
})

export default router
