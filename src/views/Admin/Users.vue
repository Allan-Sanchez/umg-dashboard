<template>
  <v-row class="justify-center">
    <v-col md="4">
      <FormUser :dataUser="dataProp" @updateTable="getTable()"></FormUser>
    </v-col>
    <v-col md="7">
      <div class="mb-5 mx-5">
        <h2>Acciones Adicionales</h2>
        <!-- <v-btn color="success">Crear Role</v-btn> -->

        <v-dialog v-model="dialogRole" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark v-bind="attrs" v-on="on">
              Crear Role
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              Formulario para crear roles de usuario
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="nameRol"
                  label="Nombre usuario"
                  autofocus
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogRole = false">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-2" text @click="dialogRole = false">
                Crear
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
            <v-btn color="red darken-1" dark @click="deleteItemConfirm()"
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
import clientAxios from "@/Config/ConfigAxios"
import FormUser from "@/components/UI/Admin/FormUser.vue"
export default {
  name: "user",
  components:{
    FormUser
  },
  data() {
    return {
      deleteId:'',
      dataProp:'hello',
     
      nameRol:"",
      //modales
      dialogRole: false,
      dialogDelete: false,
      loadingTable: false,
      headers: [
        {
          text: "Codigo de usuario",
          align: "start",
          sortable: false,
          value: "code",
        },
        { text: "Email", value: "email" },
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
     async getTable(){
      this.desserts = [];
      try{
        let response = await clientAxios.get('/api/users');
        response.data.forEach(item => {
          let temp = {
            code:item.userId,
            email:item.user,
            id:item.personId
          }
          this.desserts.push(temp);
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        let response = await clientAxios.get(`api/persons/${item.id}`);
        let temp = [response.data,item]
        
        this.dataProp = temp;
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      // console.log(item);
    },
   

     deleteItem(item) {
      // this.editedItem = Object.assign({}, item)
     this.deleteId = item.id
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      try {
        
        await clientAxios.delete(`api/users/${this.deleteId}`)
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
  },
};
</script>
