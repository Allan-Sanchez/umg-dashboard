<template>
  <v-row justify="center">
    <v-col md="5">
      <v-card class="pt-4">
        <v-card-title class="d-flex justify-center"
          >Administrar Calendario
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation class="mx-5">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Titulo de Acontesimieto"
              required
            ></v-text-field>

            <div id="category-select">
              <v-select
                :items="category.items"
                v-model="category.selected"
                label="Selecciona una categoria"
              ></v-select>
            </div>

            <div id="faculty-select">
              <v-select
                :items="faculty.items"
                v-model="faculty.selected"
                label="Selecciona una Facultad"
              ></v-select>
            </div>

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

            <v-btn :disabled="!valid" color="success" class="mr-4">
              Validate
            </v-btn>
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col md="6">
      <Timeline></Timeline>
    </v-col>
  </v-row>
</template>

<script>
import Timeline from "@/components/UI/Timeline.vue";
export default {
  name: "Calendars",
  components: {
    Timeline,
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      category: {
        selected: "",
        items: [
          "Dia de Asueto",
          "Inicio de clases",
          "Fecha de Inscripciones",
          "Evaluaciones",
        ],
      },
      faculty: {
        selected: "",
        items: [
          "Ingenieria en sistemas",
          "Economia",
          "Medicina",
          "Trabo social",
        ],
      },
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
    };
  },
};
</script>