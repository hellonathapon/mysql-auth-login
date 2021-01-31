import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    beforeEnter: async function(to, from, next){
      if(!(store.state.isAuthenticate)){
        next("/login")
      }
      // # make req to endpoint /authuser to check JWT claim
      const url = `http://localhost:5000/user`;
      try{
        const res = await axios.post(url, {claimJwt: localStorage.getItem('jwt')});
        console.log(res)
        next();
      }catch(err) {
        console.log(err);
        next('/login')
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
