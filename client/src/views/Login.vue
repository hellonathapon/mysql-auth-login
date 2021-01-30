<template>
  <div class="login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
            <h2 class="display-2 text-center">Welcome</h2>
            <p class="title text-center">Sign In to your account</p>
        </v-col>

        <v-col cols="8">
          <v-form
            ref="form"
            lazy-validation
          >

            <v-text-field
              v-model="credentials.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="credentials.password"
              :counter="10"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="hanldeSubmit"
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
import axios from 'axios';

export default {
  name: 'Login',
  data: () => ({
      credentials: {
        email: '',
        password: '',
      },
      valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
  }),
  methods: {
    hanldeSubmit: function(e){
      e.preventDefault();
      // console.log(this.credentials)
      axios.post(`http://localhost:5000/login`, this.credentials,  {withCredentials: true})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
