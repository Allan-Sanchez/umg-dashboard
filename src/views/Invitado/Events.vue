<template>
  <v-row class="justify-center">
    <v-col md="8" v-for="(item, index) in eventData" :key="index">
      <v-card>
        <v-card-text>
          <div
            class="image-post"
            :style="`background-image: url('${item.image}')`"
          >
            <!-- <img src="../../assets/UMG.png" alt=""> -->
          </div>
          <div class="mt-5  d-md-flex justify-md-space-between title-blog">
            <div>
              <h2 class="blue--text font-weight-bold text-h4">
              {{item.title}}
              </h2>
              <span class="text-subtitle-2"
                ><b class="blue--text">Facultad:</b> {{item.facultyId}}</span
              >
            </div>
            <div>
              <v-chip class="ma-2" color="red" text-color="white">
                <span>20/10/2020</span>
              </v-chip>
            </div>
          </div>
          <div class="paragraf-blog">
            <p>
             {{item.description}}
            </p>
            
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    
  </v-row>
</template>

<script>
import db from "@/Config/firebaseInit";

export default {
  name: "guest-event",
  data() {
    return {
      eventData: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      db.collection("Events")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.eventData.push(doc.data());
            console.log(`${doc.id} => ${doc.data()}`);
          });
          // console.log(this.eventData);
        });
    },
  },
};
</script>

<style>
.image-post {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  /* background-image: url("../../assets/UMG.png"); */
  /* background-image: url("https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"); */
  background-position: center;
  background-size: contain;
  max-height: 400px;
}
.title-blog {
  padding: 1rem 2rem;
}
.paragraf-blog {
  padding: 1rem 2rem;
  text-align: justify;
}
</style>
