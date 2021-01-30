<template>
    <div class="signup">
        <v-container>
      <v-row justify="center">
        <v-col cols="12">
            <h2 class="display-2 text-center">Join Us</h2>
            <p class="title text-center">Register your new account here</p>
        </v-col>

        <v-col cols="8">
          <v-form
            ref="form"
            lazy-validation
          >

            <v-text-field
              v-model="credentials.firstName"
              :rules="rules.firstName"
              label="First name"
              required
            ></v-text-field>
            <v-text-field
              v-model="credentials.lastName"
              :rules="rules.lastName"
              label="Last name"
              required
            ></v-text-field>

            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="credentials.password"
              :counter="10"
              :rules="rules.password"
              label="Password"
              required
            ></v-text-field>
            <v-text-field
              v-model="credentials.confirmPassword"
              :counter="10"
              :rules="rules.confirmPassword"
              label="Confirm Password"
              required
            ></v-text-field>

            

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submitRegister"
            >
              Register
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
   name: 'Signup',
   data: () => ({
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      valid: true,
      rules: {
        firstName: [v => !!v || 'First name is required'],
        lastName: [v => !!v || 'Last name is required'],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [v => !!v || 'Password is required'],
        confirmPassword: [v => !!v || 'Confirm Password is required']
      },
  }),
  methods: {
    submitRegister: function() {
      const url = `http://localhost:5000/register`
      axios.post(url, this.credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
}
</script>