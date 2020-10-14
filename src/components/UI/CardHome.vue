<template>
  <v-card :color="data.color">
    <v-card-text>
      <div>
        <div class="d-flex justify-center">
          <v-icon large> {{ data.icon }} </v-icon>
        </div>
        <div class="d-flex justify-space-around my-5">
          <h1>{{ data.name }}</h1>
          <h1>{{ data.qty }}</h1>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "cardHome",
  props: ["data"],
};
</script>