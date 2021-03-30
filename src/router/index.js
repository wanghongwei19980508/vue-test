import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '@/views/Movies'
import Cinema from '@/views/Cinema'
import My from '@/views/My'
import HotMovie from '@/views/movie/HotMovie'
import UpcomingMovie from '@/views/movie/UpcomingMovie'

Vue.use(VueRouter)

const routes = [
  {
    path:'/Movies',
    component:Movies,
    children:[
      {path:'/HotMovie',component:HotMovie},
      {path:'/UpcomingMovie',component:UpcomingMovie},
    ]
  },
  {
    path:'/Cinema',component:Cinema,
  },
  {
    path:'/My',component:My,
  },
  {
    path:'/',
    redirect:'/Movies',
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
