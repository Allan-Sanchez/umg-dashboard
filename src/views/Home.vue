<template>
  <v-row>
    <v-col sm="6" md="6" lg="3" v-for="(item, index) in card" :key="index">
      <CardHome :data="item"></CardHome>
    </v-col>

  
    <v-col md="6">
      <LineChart></LineChart>
    </v-col>
    <v-col md="6">
      <BarChart></BarChart>
    </v-col>

    <v-col md="6">
      <BubbleChart></BubbleChart>
    </v-col>
    <v-col md="6">
      <RadarChart></RadarChart>
    </v-col>
  </v-row>
</template>

<script>
import CardHome from "@/components/UI/CardHome.vue";

// @ is an alias to /src
import LineChart from "@/components/Chart/LineChart.vue";
import BarChart from "@/components/Chart/BarChart.vue";
import BubbleChart from "@/components/Chart/BubbleChart.vue";
import RadarChart from "@/components/Chart/RadarChart.vue";

export default {
  name: "Home",
  components: {
    CardHome,
    LineChart,
    BarChart,
    BubbleChart,
    RadarChart,
  },
  data() {
    return {
      card: [
        {
          color: "teal lighten-2",
          name: "Usuarios",
          qty: "100",
          icon: "mdi-account-group-outline",
        },
        {
          color: "red lighten-2",
          name: "Facutades",
          qty: "68",
          icon: "mdi-book",
        },
        {
          color: "indigo lighten-2",
          name: "Calendario",
          qty: null,
          icon: "mdi-calendar",
        },
        {
          color: "deep-purple lighten-2",
          name: "Eventos",
          qty: "500",
          icon: "mdi-balloon",
        },
      ],
    };
  },
};
</script>
