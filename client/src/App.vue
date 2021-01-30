<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
      class="app-bar"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text to="/login">
        <span class="mr-2 gray-col">Login</span>
      </v-btn>
      <v-btn text to="/register">
        <span class="mr-2 gray-col">Register</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .app-bar {
    background: #fff !important;
    border-width: 0 0 thin !important;
    border-style: solid !important;
    border-bottom-color: rgba(0,0,0,.12) !important;
  }
  .gray-col {
    color: rgba(0,0,0,.6) !important;
  }
</style>
