<template>
  <v-row class="justify-center">
    <v-col md="4">
      <v-card>
        <v-card-title>Formulario para Facultades</v-card-title>
        <v-card-text>
          <form @submit.prevent="createFaculty()">
            <v-text-field
              v-model="faculty"
              label="Nombre del Facultad"
              autofocus
              required
            ></v-text-field>

            <div class="d-flex justify-end">
              <v-btn v-if="!btnEdit" type="submit" color="primary">Agregar</v-btn>
              <v-btn v-if="btnEdit" type="button" @click="update()" color="success">Actualizar</v-btn>
            </div>
          </form>
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
import clientAxios from '@/Config/ConfigAxios';
export default {
  data() {
    return {
      btnEdit:false,
      deleteId:'',
      facultyId:'',
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
      desserts: [],
    };
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.getTable();
  },
  methods: {
    async createFaculty(){
      let data ={
        name: this.faculty,
        status: false,
        createDate: "2020-10-25T00:00:00"
      }
       await clientAxios.post('api/facultities',data);
      this.getTable();
    },
    editItem(item) {
      this.btnEdit = true;
      this.facultyId= item.code,
      this.faculty = item.faculty;
      // console.log(item);
    },
    async update(){
      let temp = {
        facultyId: this.facultyId,
        name: this.faculty,
        status: false,
        createDate: "2020-10-25T00:00:00"
      }
      await clientAxios.put(`api/facultities/${this.facultyId}`,temp);
      this.getTable();
      this.faculty = "";  
      this.btnEdit = false;
    },

    deleteItem(item) {
      // this.editedItem = Object.assign({}, item)
      // console.log(item);
           this.deleteId = item.id
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
        try {
        
        await clientAxios.delete(`api/facultities/${this.deleteId}`)
        this.deleteId= "";
        this.getTable();
        // console.log(response);
      } catch (error) {
       console.log(error); 
      }

      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    async getTable(){
      this.desserts=[];
      try {
        let response = await clientAxios.get('api/facultities')
        response.data.forEach(item => {
          let temp = {
            code: item.facultyId,
            faculty: item.name,
            id: item.facultyId,
          }
          this.desserts.push(temp);
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>