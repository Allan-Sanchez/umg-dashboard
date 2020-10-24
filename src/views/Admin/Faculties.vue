<template>
  <v-row class="justify-center">
    <v-col md="4">
      <v-card>
        <v-card-title>Formulario para Facultades</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="faculty"
              label="Nombre del Facultad"
              autofocus
              required
            ></v-text-field>

            <div class="d-flex justify-end">
              <v-btn color="success">Agregar</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        :loading="loadingTable"
        loading-text="Cargando... Por favor espere"
        class="elevation-1"
      >
        <template v-slot:item.id="{ item }">
          <v-icon color="info" class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon color="red" @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
      <!-- eslint-disable-next-line -->
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline"
            >Estas segudo de eliminarlo?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" dark @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn color="red darken-1" dark @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      faculty: "",
      dialogDelete: false,
      loadingTable:false,
      headers: [
        {
          text: "Codigo de Facultad",
          align: "start",
          sortable: false,
          value: "code",
        },
        { text: "Nombre de Facultad", value: "faculty" },
        { text: "Acciones", value: "id" },
      ],
      desserts: [
        {
          code: "123-456-11",
          faculty: "Lorem, ipsum dolor.",
          id: "1",
        },
        {
          code: "123-456-11",
          faculty: "Lorem, ipsum dolor.",
          id: "2",
        },
        {
          code: "123-456-11",
          faculty: "Lorem, ipsum dolor.",
          id: "3",
        },
        {
          code: "123-456-11",
          faculty: "Lorem, ipsum dolor.",
          id: "4",
        },
      ],
    };
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    editItem(item) {
      console.log(item);
    },

    deleteItem(item) {
      // this.editedItem = Object.assign({}, item)
      console.log(item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
    },
  },
};
</script>