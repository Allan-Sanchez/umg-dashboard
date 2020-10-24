<template>
  <v-app >
    <!-- If using vue-router -->
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  // computed: {
  //   isAuthenticated() {
  //     return this.$store.getters.isAuthenticated;
  //   },
  // },
};
</script>

<style >
.test {
  background: #e2e8f0;
}
</style>