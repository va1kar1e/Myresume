<template>
  <div class="Section3">
    <v-container>
      <Cert />
      <v-row> 
        <Recognition />
        <CourseInterest />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Cert from "@/components/profile/section3/Cert.vue";
import Recognition from "@/components/profile/section3/Recognition.vue";
import CourseInterest from "@/components/profile/section3/courseInterest/CourseInterest.vue";

export default {
  data() {
    return {
      title: "Section3",
    };
  },
  components: {
    Cert,
    Recognition,
    CourseInterest
  },
};
</script>
