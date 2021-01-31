<template>
  <div class="login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
            <h2 class="display-2 text-center">Hello World!</h2>
            <p class="title text-center">Log In to your account</p>
        </v-col>

        <v-col cols="8">
          <v-form
            ref="form"
            lazy-validation
            
          >
            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              label="E-mail"
              required
              @keyup.enter="submitLogin"
            ></v-text-field>

            <v-text-field
              v-model="credentials.password"
              :counter="10"
              :rules="rules.pwd"
              label="Password"
              required
              @keyup.enter="submitLogin"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submitLogin"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Login',
  data: () => ({
      credentials: {
        email: '',
        password: '',
      },
      valid: true,
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        pwd: [v => !!v || 'Password is required',]
      },
  }),
  methods: {
    submitLogin: function(e){
      e.preventDefault();
      this.$store.dispatch('LOGIN', this.credentials)
        .then(() => {
          console.log(`success from Login.vue`)
          this.$router.push('/user')
        })
        .catch(err => {
          console.error(`failure log from Login.vue! ${err}`)
        })
    }
  }
}
</script>
