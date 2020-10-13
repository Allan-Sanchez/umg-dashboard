<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col md="4">
      <v-card elevation="4">
        <v-card-title class="d-flex justify-center text-md-h3 mb-4">
          <div class="d-flex justify-center">
            <!-- <v-avatar size="150"> -->
            <v-img
              src="../assets/UMG.png"
              max-height="170"
              max-width="170"
              alt="John"
            >

            </v-img>
            
            <!-- </v-avatar> -->
          </div>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation class="mx-10">
            <h1 class="text-center">Login</h1>
            <v-text-field
              v-model="name"
              :counter="15"
              :rules="nameRules"
              label="Name"
              autofocus
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn block color="primary" class="mr-4 my-6 py-5" @click="Login">
              Login
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    Login() {},
  },
};
</script>