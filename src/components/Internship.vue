<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Internship</h2>
    <div class="py-4">
      <div class="title">
        <h2 :class="`headline font-weight-light mb-4 text-uppercase ${item.color}--text`">{{ item.univ }}</h2>
        <p class="title font-weight-light">{{ item.role }}</p>
        <p class="body-2 font-italic font-weight-light">{{ item.period }}</p>
      </div>
      <div class="team mb-5">
        <p
          :class="`text-capitalize font-weight-bold mb-4 text-left ${item.color}--text`"
        >Team</p>
        <p :class="`body-1 font-weight-light text-left black--text content`">{{ item.lab }}</p>
      </div>
      <div class="archiev mb-5">
        <p
          :class="`text-capitalize font-weight-bold text-left ${item.color}--text`"
        >Achievements/Tasks</p>
        <v-expansion-panels flat accordion hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p
                :class="`body-1 font-weight-light text-left black--text header-content`"
              >{{ item.task.name }}</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-chip
                  :ripple="false"
                  v-for="(s, i) in item.task.tag"
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
                      v-for="(image,i) in item.task.images"
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
.content {
  margin-left: 12px;
}
</style>

<script lang="ts">
export default {
  name: "Internship",
  data: () => ({
    dialog: false,
    item: {
      color: "red",
      period: "June - August 2018",
      univ: "Kyoto Institute of Technology",
      role: "Junior Researcher",
      lab: "Software Engineering Laboratory",
      task: {
        name: "Making a Fault-Prones Notification for Developer Team on Raspberypi",
        tag: ["Face Detection", "Face Recognition", "Raspberry Pi"],
        images: [
          '@/assets/images/intern/intern_page-0001.jpg',
          '@/assets/images/intern/intern_page-0002.jpg',
          '@/assets/images/intern/intern_page-0003.jpg',
          '@/assets/images/intern/intern_page-0004.jpg',
          '@/assets/images/intern/intern_page-0005.jpg',
          '@/assets/images/intern/intern_page-0006.jpg',
          '@/assets/images/intern/intern_page-0007.jpg',
          '@/assets/images/intern/intern_page-0008.jpg',
          '@/assets/images/intern/intern_page-0009.jpg',
          '@/assets/images/intern/intern_page-0010.jpg',
          '@/assets/images/intern/intern_page-0011.jpg',
          '@/assets/images/intern/intern_page-0012.jpg',
          '@/assets/images/intern/intern_page-0013.jpg',
          '@/assets/images/intern/intern_page-0014.jpg',
          '@/assets/images/intern/intern_page-0015.jpg',
          '@/assets/images/intern/intern_page-0016.jpg',
          '@/assets/images/intern/intern_page-0017.jpg',
          '@/assets/images/intern/intern_page-0018.jpg',
          '@/assets/images/intern/intern_page-0019.jpg',
        ]
      }
    }
  })
};
</script>











