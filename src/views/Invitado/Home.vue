<template>
  <v-app>
    <Navbar></Navbar>

    <v-main class="test">
      
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Invitado/Navbar.vue"
export default {
  components:{
    Navbar
  },
  data: () => ({
    drawer: true,
    group: null,
    messages: 0,
   
  }),

  
};
</script>

<style>
.icon-horn{
  margin-top: -5px;
}
</style>