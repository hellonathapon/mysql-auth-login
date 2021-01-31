import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('jwt')){
        next("/login")
      }
      // # make req to endpoint /authuser to check JWT claim
      const url = `http://localhost:5000/authuser`;
      axios.post(url, localStorage.getItem('jwt'))
        .then(res => {
          console.log(res)
          //# proceed to protected route
        })
        .catch(err => {
          console.log(err)
          //# deny access to protected route :/
        });
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
