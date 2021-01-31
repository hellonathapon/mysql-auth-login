<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
      class="app-bar"
    >
      <div class="d-flex align-center">
        <router-link to='/'>
            <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
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
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    color: #2f495e;
    font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  }
  .app-bar {
    background: #fff !important;
    border-width: 0 0 thin !important;
    border-style: solid !important;
    border-bottom-color: rgba(0,0,0,.12) !important;
  }
  .gray-col {
    color: rgba(0,0,0,.6) !important;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
    transform: translateX(2em);
  }
</style>
