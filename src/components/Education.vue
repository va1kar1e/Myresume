<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Education</h2>
    <div class="py-4">
      <div class="title">
        <h2 :class="`headline font-weight-light mb-4 text-uppercase ${item.color}--text`">{{ item.univ }}</h2>
        <p class="title font-weight-light">{{ item.deg }}</p>
        <p class="body-2 font-italic font-weight-light">{{ item.period }}</p>
      </div>
      <div class="archiev mb-5 header-content">
        <p
          :class="`text-capitalize font-weight-bold text-left ${item.color}--text`"
        >Thesis/Project</p>
        <v-expansion-panels flat accordion hover>
          <v-expansion-panel v-for="(task, i) in item.project" :key="i">
            <v-expansion-panel-header>
              <p
                :class="`body-1 font-weight-light text-left black--text header-content`"
              >{{ task.name }}</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-chip
                  :ripple="false"
                  v-for="(s, i) in task.tag"
                  :key="i"
                  class="ma-1"
                  :color="item.color"
                  small
                  outlined
                >{{ s }}</v-chip>
              </v-row>
              <v-responsive min-height="1vh"></v-responsive>
              <v-row>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" width="800px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on" text small>See More</v-btn>
                  </template>
                  <v-carousel
                    hide-delimiters
                    height="auto"
                  >
                    <v-carousel-item
                      v-for="(image,i) in task.images"
                      :key="i"
                      :src="require(image)"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>
                </v-dialog>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-col>
</template>

<style>
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
.content {
  margin-left: 12px;
}
</style>

<script lang="ts">
export default {
  name: "Education",
  data: () => ({
    dialog: false,
    item: {
      color: "green",
      period: "August 2015 - May 2019",
      univ: "Kasersart University",
      deg: "Computer Engineering, B.Eng",
      project: [
        {
          name: "Search Result Clustering on Thai Internet Forum using Word2Vec Model",
          tag: ["Word Embedding", "TF-IDF", "Word2Vec Model", "Python", "Flask", "Gensim", "React", "NodeJS"],
          images: [
            '@/assets/images/intern/intern_page-0001.jpg',
            '@/assets/images/intern/intern_page-0002.jpg',
          ]
        },
        {
          name: "Trusted Webdomain Analysis based on SSL/TLS Certificate",
          tag: ["TestSSL.sh", "SemanticUI", "Next.JS", "NodeJS"],
          images: [
            '@/assets/images/intern/intern_page-0001.jpg',
            '@/assets/images/intern/intern_page-0002.jpg',
          ]
        },
        {
          name: "Explore a danger area with a Robot using NodeMCU and P2P Camera",
          tag: ["Arduino", "ESP8266", "Express.JS", "NodeJS", "Bootstrap"],
          images: [
            '@/assets/images/intern/intern_page-0001.jpg',
            '@/assets/images/intern/intern_page-0002.jpg',
          ]
        }
      ]
    }
  })
};
</script>

