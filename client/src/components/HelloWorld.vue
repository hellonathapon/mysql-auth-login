<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 mb-3">
          Welcome to Vue Express mySQL
        </h1>
        <p class="title">Check out this project <a target="blank" href="https://github.com/hellonathapon/mysql-auth-login">source code</a></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>
