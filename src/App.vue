<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h1 class="mr-3">UMG</h1>
      </div>

      <v-spacer></v-spacer>

      <v-badge :content="messages" :value="messages" color="green" overlap>
        <v-icon large> mdi-bell </v-icon>
      </v-badge>
    </v-app-bar>

    <v-main class="test">
      <v-navigation-drawer v-model="drawer" fixed  bottom temporary>
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
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  data: () => ({
    drawer: true,
    group: null,
    messages: 0,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "Usuarios", icon: "mdi-account-group-outline" },
      { title: "Facultades", icon: "mdi-book" },
      { title: "Calendarios", icon: "mdi-calendar" },
      { title: "Eventos", icon: "mdi-balloon" },
      // { title: "My Account", icon: "mdi-account" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style >
.test {
  position: relative;
  background: #e2e8f0;
}
</style>