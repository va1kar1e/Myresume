<template>
  <v-col class="mb-5" cols="12" md="12" lg="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Certifications
    </h2>
    <v-row justify="center">
      <v-col
        cols="6"
        sm="6"
        md="3"
        lg="3"
        v-for="(c, i) in item.course"
        :key="i"
      >
        <v-img
          :lazy-src="require('@/assets/images/mini/cert/' + c.icon)"
          :src="require('@/assets/images/full/cert/' + c.icon)"
          class="my-3"
          :alt="c.name"
          contain
          min-height="100"
          max-height="150"
          @click="overlay = !overlay"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
          <v-overlay :absolute="absolute" :value="overlay" :opacity="0.9">
            <a class="body-1 font-weight-bold" :href="c.id">{{ c.name }}</a>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ProfileSection3Cert",
  data: () => ({
    absolute: true,
    overlay: false,
    item: info.cert.item
  }),
};
</script>
