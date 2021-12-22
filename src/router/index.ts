import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Blank from '@/views/Blank.vue'
import { findShortenUrl } from '@/backend/database'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:routeId',
    component: Blank,
    beforeEnter: async (to, _from, next) => {
      const { data, error } = await findShortenUrl(to.params.routeId)
      if (error) return console.error(error)
      
      if (data.shorten_string) {
        location.href = data.url
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
