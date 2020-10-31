<template>
  <v-card>
    <v-card-title>Formulario para Facultades</v-card-title>
    <v-card-text>
      <form @submit.prevent="createUser()">
        <v-text-field
          v-model="name"
          label="Nombre usuario"
          autofocus
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          label="Apellidos"
          required
        ></v-text-field>
        <v-select
          :items="rolSelect"
          v-model="rolId"
          item-text="name"
          item-value="rolId"
          label="Role de Usuario"
        ></v-select>
        <v-text-field
          type="number"
          v-model="phone"
          label="Numero de telefono"
          required
        ></v-text-field>

        <v-text-field
          v-model="academicLevel"
          label="Agrado Academico"
          required
        ></v-text-field>

        <v-text-field
          type="email"
          v-model="email"
          label="E-mail usuario"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          label="Contraseña"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="passwordConfirm"
          label="Confirmar Contraseña"
          required
        ></v-text-field>

        <div class="d-flex justify-end">
          <v-btn v-if="!btnEditar" type="submit" color="primary">Crear</v-btn>
          <v-btn
            v-if="btnEditar"
            type="button"
            color="success"
            @click="updateUser()"
            >Editar</v-btn
          >
        </div>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import clientAxios from "@/Config/ConfigAxios.js";
export default {
  name: "userForm",
  props: ["dataUser"],
  data() {
    return {
      btnEditar: false,
      //formulario
      personId:"",
      userId:"",
      name: "",
      lastName: "",
      rolId: "",
      rolSelect: [],
      email: "",
      phone: "",
      academicLevel: "",
      password: "",
      passwordConfirm: "",
    };
  },
  watch: {
    dataUser: function(newVal) {
      this.name = newVal[0].name;
      this.lastName = newVal[0].lastName;
      this.rolId = newVal[0].rolId;
      this.phone = newVal[0].phone;
      this.academicLevel = newVal[0].academicLevel;
      this.email = newVal[0].email;
      this.btnEditar = true;
      this.personId = newVal[0].personId;
      this.userId = newVal[1].code;
      console.log(newVal);
    },
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async createUser() {
      if (this.password === this.passwordConfirm) {
        let dataPerson = {
          userTypeId: 1,
          name: this.name,
          rolId: this.rolId,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          status: true,
          birthdate: "2020-10-25T00:00:00",
          academicLevel: this.academicLevel,
          createDate: "2020-10-25T00:00:00",
        };

        try {
          let response = await clientAxios.post("api/persons", dataPerson);
          //  console.log(response.data.personId);

          let dataUser = {
            personId: response.data.personId,
            user: this.email,
            password: this.password,
            oldPassword: this.password,
            dateUpdate: "2020-10-01T00:00:00",
          };

          await clientAxios.post("api/users", dataUser);
          this.$emit("updateTable");
          this.cleanForm();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getdata() {
      try {
        let response = await clientAxios.get("/api/roles");
        response.data.forEach((item) => {
          let temp = {
            rolId: item.rolId,
            name: item.name,
          };
          this.rolSelect.push(temp);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser() {
      if (this.password === this.passwordConfirm) {
        let dataPerson = {
          userTypeId: 1,
          personId:this.personId,
          name: this.name,
          rolId: this.rolId,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          status: true,
          birthdate: "2020-10-25T00:00:00",
          academicLevel: this.academicLevel,
          createDate: "2020-10-25T00:00:00",
        };

        try {
          await clientAxios.put(`api/persons/${this.personId}`, dataPerson);
          //  console.log(response.data.personId);

          // let dataUser = {
          //   userId:this.userId,
          //   personId: this.personId,
          //   user: this.email,
          //   password: this.password,
          //   oldPassword: this.password,
          //   dateUpdate: "2020-10-01T00:00:00"
          // };

          // console.log(dataUser);
          // await clientAxios.post(`api/users/${this.userId}`, dataUser);
          this.$emit("updateTable");
          this.cleanForm();
          this.btnEditar= false
        } catch (error) {
          console.log(error);
        }
      }
    },
    cleanForm() {
      (this.name = ""),
        (this.lastName = ""),
        (this.rolId = ""),
        (this.rolSelect = []),
        (this.email = ""),
        (this.phone = ""),
        (this.academicLevel = ""),
        (this.password = ""),
        (this.passwordConfirm = "");
    },
  },
};
</script>

<style></style>
