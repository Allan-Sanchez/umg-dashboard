<template>
  <v-app-bar  app color="primary" dark>
      <div class="d-flex align-center">
        <h1 class="mr-3">UMG</h1>
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
    name:"NavbarInvitado"
}
</script>

<style>

</style>