<template>
<v-row class="justify-center">
  <v-col md="10">
    <v-form>
      <v-row>
        <v-col>
       <v-autocomplete
        :items="states"
        color="white"
        v-model="facultad"
        item-text="name"
        label="Selecciona tu facultad Facultad"
      ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
        :items="states"
        color="white"
        item-text="name"
        label="Selecciona el nombre de tu profesor"
      ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
        :items="states"
        color="white"
        item-text="name"
        label="Selecciona el nombre del curso"
      ></v-autocomplete>

        </v-col>
      </v-row>
    </v-form>
  <h2>Calendar</h2>
  <Calendar></Calendar>

  </v-col>
</v-row>
</template>

<script>
import Calendar from "@/components/UI/Calendar.vue"
export default {

name:"guess-calendar",
components:{
  Calendar
},
data() {
  return {
    facultad:'',
    states: [
          { name: 'Florida', abbr: 'FL', id: 1 },
          { name: 'Georgia', abbr: 'GA', id: 2 },
          { name: 'Nebraska', abbr: 'NE', id: 3 },
          { name: 'California', abbr: 'CA', id: 4 },
          { name: 'New York', abbr: 'NY', id: 5 },
        ],
  }
},
}
</script>

<style>

</style>