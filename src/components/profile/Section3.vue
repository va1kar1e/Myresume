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
import Cert from "@/components/profile/Section3/Cert.vue";
import Recognition from "@/components/profile/Section3/Recognition.vue";
import CourseInterest from "@/components/profile/Section3/CourseInterest.vue";

export default {
  name: "ProfileSection3",
  components: {
    Cert,
    Recognition,
    CourseInterest
  },
};
</script>
