<template>
  <div class="about">
    <h1>This is an Login page</h1>
    <label for="email">Email</label>
    <input v-model="credentials.email" type="text" id="email" name="email">
    <label for="password">Password</label>
    <input v-model="credentials.password" type="password" id="password" name="password">
    <button v-on:click="hanldeSubmit" type="submit">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: () => ({
      credentials: {
        email: '',
        password: '',
      }
  }),
  methods: {
    hanldeSubmit: function(e){
      e.preventDefault();
      // console.log(this.credentials)
      axios.post(`http://localhost:5000/auth/login`, this.credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
