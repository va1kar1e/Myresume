<template>
  <v-col class="mb-2" cols="12" md="12" lg="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Certifications
    </h2>
    <v-row justify="center">
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="4"
        v-for="(c, i) in item.course"
        :key="i"
      >
        <v-img
          :src="require('@/assets/images/cert/' + c.icon + '.png')"
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

<style scoped></style>

<script lang="ts">
export default {
  name: "Cert",
  data: () => ({
    absolute: true,
    overlay: false,
    item: {
      course: [
        {
          name: "CompTIA Network Vulnerability Assessment Professional",
          icon: "cnvp",
          id:
            "https://www.youracclaim.com/earner/earned/badge/2a88695e-dc63-4ce6-91e3-e6703986715a/public_url",
        },
        {
          name: "CompTIA Pentest+",
          icon: "penp",
          id:
            "https://www.youracclaim.com/earner/earned/badge/caf4df4f-b8f9-42fe-bfa7-610f6e837e3a/public_url",
          claim: "",
        },
        {
          name: "CompTIA Security+",
          icon: "secp",
          id:
            "https://www.youracclaim.com/earner/earned/badge/93cef120-6f78-4592-a678-47d9c6f523e8/public_url",
        },
        {
          name: "HCIA Routing & Switching",
          icon: "hciars",
          id: "",
        },
        {
          name: "CCNA Intro to Cybersecurity",
          icon: "ccna_in_sec",
          id: "",
        },
      ],
    },
  }),
};
</script>
