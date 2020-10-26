<template>
  <v-row class="justify-center">
    <v-col md="8">
      <v-card>
        <v-card-text>
          <div class="image-post" style="background-image: url('https://images.unsplash.com/photo-1602526215099-19d4d14797d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
            <!-- <img src="../../assets/UMG.png" alt=""> -->
          </div>
          <div class="mt-5  d-md-flex justify-md-space-between title-blog">
            <div>
              <h2 class="blue--text font-weight-bold text-h4">Lorem, ipsum dolor.</h2>
              <span class="text-subtitle-2"><b class="blue--text">creado por:</b> Lorem, ipsum dolor.</span>
            </div>
            <div>
              <v-chip class="ma-2" color="red" text-color="white">
                <span>20/10/2020</span>
              </v-chip>
            </div>
          </div>
          <div class="paragraf-blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              pariatur nemo quaerat laborum harum, consectetur ullam. Sint nam
              commodi ullam repellat obcaecati voluptate ab delectus quisquam
              nisi, porro dolorum eos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              pariatur nemo quaerat laborum harum, consectetur ullam. Sint nam
              commodi ullam repellat obcaecati voluptate ab delectus quisquam
              nisi, porro dolorum eos?
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
    
      <v-col md="8">
      <v-card>
        <v-card-text>
          <div class="image-post" style="background-image: url('https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
            <!-- <img src="../../assets/UMG.png" alt=""> -->
          </div>
          <div class="mt-5 d-md-flex justify-md-space-between title-blog">
            <div>
              <h2 class="blue--text font-weight-bold text-h4">Lorem, ipsum dolor.</h2>
              <span class="text-subtitle-2"><b class="blue--text">creado por:</b> Lorem, ipsum dolor.</span>
            </div>
            <div>
              <v-chip class="ma-2" color="red" text-color="white">
                <span>20/10/2020</span>
              </v-chip>
            </div>
          </div>
          <div class="paragraf-blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              pariatur nemo quaerat laborum harum, consectetur ullam. Sint nam
              commodi ullam repellat obcaecati voluptate ab delectus quisquam
              nisi, porro dolorum eos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              pariatur nemo quaerat laborum harum, consectetur ullam. Sint nam
              commodi ullam repellat obcaecati voluptate ab delectus quisquam
              nisi, porro dolorum eos?
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
export default {
  name: "guest-event",
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
.title-blog{
  padding: 1rem 2rem;
}
.paragraf-blog{
  padding: 1rem 2rem;
  text-align: justify;
}
</style>