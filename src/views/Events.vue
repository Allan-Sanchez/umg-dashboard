<template>
<v-row class=" justify-center">
  <v-col md="6 mt-5">
    <!-- <h1>This is an about Events</h1> -->
     <Calendar></Calendar> 
  </v-col>
</v-row>
  
</template>

<script>
import Calendar from "@/components/UI/Calendar.vue"

export default {
  name:"events",
  components:{
    Calendar
  }  
}
</script>