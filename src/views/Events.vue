<template>
  <v-row class="justify-center">
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
              label="Nombre del evento"
              required
            ></v-text-field>

            <div>
              <v-select
                :items="items"
                v-model="selected"
                label="Selecciona una facultad"
              ></v-select>
            </div>
            <v-row>
              <v-col md="6">
                <v-menu
                  v-model="create_at.menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="create_at.date"
                      label="Fecha de inicio"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="create_at.date"
                    @input="create_at.menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col md="6">
                <v-dialog
                  ref="dialog"
                  v-model="create_at.modal2"
                  :return-value.sync="create_at.time"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="create_at.time"
                      label="Hora inicial"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="create_at.modal2" v-model="create_at.time" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="create_at.modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(create_at.time)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-menu
                  v-model="endDate.menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate.date"
                      label="Fecha de final"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate.date"
                    @input="endDate.menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col md="6">
                <v-dialog
                  ref="dialog"
                  v-model="endDate.modal2"
                  :return-value.sync="endDate.time"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate.time"
                      label="Hora final"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="endDate.modal2" v-model="endDate.time" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endDate.modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(endDate.time)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <v-btn  color="success" class="mr-4">
              Crear Evento
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col md="6 mt-2">
      <!-- <h1>This is an about Events</h1> -->
      <Calendar></Calendar>
    </v-col>
  </v-row>
</template>

<script>
import Calendar from "@/components/UI/Calendar.vue";

export default {
  name: "events",
  components: {
    Calendar,
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      selected: "",
      items: ["Ingenieria en sistemas", "Economia", "Medicina", "Trabo social"],
      create_at: {
        date: new Date().toISOString().substr(0, 10),
        menu1: false,
        time: null,
        menu2: false,
        modal2: false,
      },
        endDate: {
        date: '',
        menu1: false,
        time: null,
        menu2: false,
        modal2: false,
      },
    };
  },
};
</script>