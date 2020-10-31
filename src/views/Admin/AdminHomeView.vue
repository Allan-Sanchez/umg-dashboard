<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h1 class="mr-3">UMG</h1>
      </div>

      <v-spacer></v-spacer>

      <v-badge class="mx-5"  :content="messages" :value="messages" color="green" overlap>
        <v-icon large> mdi-bell </v-icon>
      </v-badge>
      <v-btn color="red" dark @click="Logout()">Cerrar sesion</v-btn>
    </v-app-bar>

    <v-main >
      <v-navigation-drawer
        v-if="isAuthenticated"
        v-model="drawer"
        fixed
        app
        bottom
        temporary
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.slug">
            <!-- <div class="d-flex menu"> -->

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

            <!-- </div> -->
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="color-guest">
        <!-- If using vue-router -->
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import authToken from '../../Config/AuthToken';

export default {
  data: () => ({
    isAuthenticated: true,
    drawer: true,
    currentUser:'',
    group: null,
    messages: 0,
    items: [
      { slug: "/dashboard", title: "Home", icon: "mdi-home-city" },
      {
        slug: "/dashboard/usuarios",
        title: "Usuarios",
        icon: "mdi-account-group-outline",
      },
      { slug: "/dashboard/facultades", title: "Facultades", icon: "mdi-book" },
      { slug: "/dashboard/calendarios", title: "Calendarios", icon: "mdi-calendar" },
      { slug: "/dashboard/eventos", title: "Eventos", icon: "mdi-balloon" },
      // { title: "My Account", icon: "mdi-account" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }
  },
  methods: {
    Logout(){
      localStorage.removeItem('token');
      this.$router.push('/login')
    }
  },
 
};
</script>

<style>
.color-guest {
  background: #edf2f7 !important;
}
</style>