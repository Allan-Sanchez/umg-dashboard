<template>
  <v-app >
    <!-- If using vue-router -->
    <router-view> </router-view>
  </v-app>
</template>

<script>
import authToken from './Config/AuthToken';


export default {
  name: "App",

  components: {},
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }
  },

  // computed: {
  //   isAuthenticated() {
  //     return this.$store.getters.isAuthenticated;
  //   },
  // },
};
</script>

<style >
.test {
  /* background: #e2e8f0; */
}
</style>