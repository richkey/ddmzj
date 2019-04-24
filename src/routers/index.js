import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './cinema'
import Movie from './movie'
import Mine from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    Cinema,
    Movie,
    Mine,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})