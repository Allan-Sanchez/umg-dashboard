<template>
  <v-row justify="center">
    <v-col md="5">
      <v-card class="pt-4">
        <v-card-title class="d-flex justify-center"
          >Administrar Calendario
        </v-card-title>
        <v-card-text>
          <form class="mx-5" @submit.prevent="createEvent()">
            <v-text-field
              v-model="title"
              autofocus
              label="Titulo de la publicacion"
              required
            ></v-text-field>

            <div id="faculty-select">
              <v-select
                :items="facultySelect"
                v-model="facultyId"
                label="Selecciona una Facultad"
              ></v-select>
            </div>
            <v-textarea
              name="input-7-1"
              label="Descripcion de la publicacion"
              v-model="description"
            ></v-textarea>
             <v-text-field
              v-model="image"
              label="Url de la image"
            ></v-text-field>
            <!-- <v-file-input  prepend-icon="mdi-camera" accept="image/*" label="Selecciona tu imagen" @change="image(e)"></v-file-input> -->

            <!-- <input id="file-input" v-model="image" type="file" /> -->
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  disabled
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>

            <v-btn type="submit" color="primary">Crear</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- <v-col md="6">
      <Timeline></Timeline>
    </v-col> -->
  </v-row>
</template>

<script>
//import Timeline from "@/components/UI/Timeline.vue";
import db from "@/Config/firebaseInit"
import clientAxios from "@/Config/ConfigAxios";
export default {
  name: "Calendars",
  components: {
    //  Timeline,
  },
  data() {
    return {
      title: "",
      description: "",
      image: "",
      facultyId: "",
      facultySelect: [],
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
    };
  },
  mounted() {
    this.getFaculty();
  },
  methods: {
    async getFaculty() {
      let response = await clientAxios.get("api/facultities");
      response.data.forEach((item) => {
        this.facultySelect.push(item.name);
      });
    },
    async createEvent(){
      let data = {
        title:this.title,
        description:this.description,
        image:this.image,
        date:this.date,
        facultyId:this.facultyId
      }

      await db.collection("Events").add(data);
     this.clearForm();
    },
    clearForm(){
      this.title= "";
      this.description= "";
      this.image= "";
      this.facultyId= "" ;
    }
  },
};
</script>
