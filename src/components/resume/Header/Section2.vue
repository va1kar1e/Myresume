<template>
  <v-col cols="4" class="resume-header-section2">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="5" class="resume-header-section3p1">
        <v-img
          :src="require('@/assets/images/full/profilepic.png')"
          contain
          max-height="95"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="5" class="resume-header-section3p2 text-right">
        <QRResume :url="contacts[0][1]" size="95" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import info from "@/assets/info.json";
import QRResume from "@/components/resume/Components/QRResume.vue"

export default {
  name: "ResumeHeaderSection2",
  data() {
    return {
      contacts: [
        [info.urllink.homepage, info.urllink.homepage],
      ],
    };
  },
  components: {
    QRResume,
  }
};
</script>
