<template>
  <div>
    <v-sheet tile height="54" class="d-flex ">
      <v-btn icon class="ma-2" @click="prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <!-- <v-toolbar-title v-if="$refs.calendar"> -->
      <div class="mt-3 mx-5">
        {{ title }}
      </div>
      <!-- </v-toolbar-title> -->

      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        color="info"
        ref="calendar"
        v-model="value"
        :type="type"
        :events="events"
        :event-color="getEventColor"
      ></v-calendar>
    </v-sheet>
  </div>
</template>


<script>
export default {
  data: () => ({
    title: "",
    type: "month",
    types: ["month", "week", "day", "4day"],
    value: "",
    events: [
      {
        name: "Weekly Meeting",
        start: "2020-10-1 09:00",
        end: "2020-10-3 10:00",
        color: "success",
      },
      {
        name: "Thomas' Birthday",
        start: "2020-10-07 09:00",
        end: "2020-10-10 10:00",
        color: "indigo",
      },
      {
        name: "Mash Potatoes",
        start: "2020-10-10 09:00",
        end: "2020-10-20 10:00",
        color: "blue",
      },
       {
        name: "Mash Potatoes",
        start: "2020-12-10 09:00",
        end: "2020-12-20 10:00",
        color: "info",
      },
    ],
  }),
  mounted() {
    this.title = this.$refs.calendar.title;
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    async next() {
      await this.$refs.calendar.next();
      this.title = this.$refs.calendar.title;
    },
    async prev() {
      await this.$refs.calendar.prev();
      this.title = this.$refs.calendar.title;
    },
  },
};
</script>