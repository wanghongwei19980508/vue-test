import Vue from 'vue'
import VueRouter from 'vue-router'

import MoviesRouter from './routes/Movie'
import CinemaRouter from './routes/Cinema'
import MyRouter from './routes/My'
import Test from '@/views/test'

// 获取VueRouter原型上的push
const originalPush = VueRouter.prototype.push;
// 对原先的push方法进行重写
VueRouter.prototype.push = function push(location) {
  // 在原先的代码基础上加了一个异常捕获，且并没有输出异常，所以就看不到报错了。
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter)

const routes = [
  ...MoviesRouter,
  CinemaRouter,
  MyRouter,
  {
    path: '/',
    redirect: '/Movies',
  },
  { path: "*", component: () => import('../views/NotFound') },
  {
    path: '/test',component: Test,
  },
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
