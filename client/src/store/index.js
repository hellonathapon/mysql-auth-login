import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticate: localStorage.getItem('jwt') ? true : false,
  },
  mutations: {
    login: function(state, payload){
      state.isAuthenticate = payload
    }
  },
  actions: {
    // AUTHENTICATE: function(context, payload){
    //   context.commit('authenticate', payload)
    // },
    LOGIN: function(context, payload){
      //# return romise to login.vue
      // let self = this;
      return new Promise( function(resolve, reject){
        const url = `http://localhost:5000/login`
        axios.post(url, payload, {withCredentials: true})
          .then( function(res) {
            localStorage.setItem('jwt', res.data.jwt);
            context.commit('login', true);
            resolve();
          })
          .catch(err => {
            console.error(err);
            reject(err);
          })
      })
    }
  }
})
