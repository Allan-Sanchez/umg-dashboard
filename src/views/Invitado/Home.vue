<template>
  <v-app>
    <Navbar></Navbar>

    <v-main class="color-guest">
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> -->
      <div>
        <router-view> </router-view>
      </div>
      <!-- If using vue-router -->
      <!-- </v-container> -->
    </v-main>
    <v-footer dark padless >
      <v-card flat tile class="primary white--text text-center footer-card">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Trabajo realizado como Proyecto final para el curso de paginas web los integrantes que participaron en el proyecto los encontrara en el siguien link <a href="#">Github</a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          2020 — <strong>Allan Sanchez</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Invitado/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    drawer: true,
    group: null,
    messages: 0,
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
};
</script>

<style>
.icon-horn {
  margin-top: -5px;
}
.color-guest {
  background: #edf2f7;
}
.footer-card{
  width: 100%;
}
</style>