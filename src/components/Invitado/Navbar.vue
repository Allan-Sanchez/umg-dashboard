<template>
  <v-app-bar  app dark color="primary">
      <div @click="redict()" class="d-flex align-center" style="cursor:pointer;">
        <h1  class="mr-3 title-nav">UMG</h1>
      </div>

      <v-spacer></v-spacer>
      <v-btn  text to="/eventos">Eventos 
        <v-icon class="ml-2 icon-horn">mdi-bullhorn</v-icon>
      </v-btn>
      <v-btn  text to="/calendario">Calendario
        <v-icon class="ml-2">mdi-calendar</v-icon>
      </v-btn>
      <v-btn text to="/login">Login
        <v-icon class="ml-2">mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name:"NavbarInvitado",
    methods: {
      redict(){
        this.$router.push('/');
      }
    },
}
</script>

<style>
.title-nav{
  font-family: "Montserrat",sans-serif !important;
  font-size: 32px;
  margin-left: 20px;
  font-weight: 600;
  line-height: 24px;
  /* color: #EDF2F7 !important; */
}
</style>