<template>
  <v-col class="mb-1" cols="12" md="12" lg="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Certifications</h2>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="3" lg="2" v-for="(c, i) in item.course" :key="i">
        <v-img
          :src="require('@/assets/images/cert/' + c.icon + '.png')"
          class="my-3"
          :alt="c.name"
          contain
          min-height="80"
          max-height="100"
          @click="overlay = !overlay"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
          <v-overlay :absolute="absolute" :value="overlay" :opacity="0.9">
            <p class="body-1 font-weight-bold">{{c.name}}</p>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Cert",
  data: () => ({
    absolute: true,
    overlay: false,
    item: {
      course: [
        // {
        //   name: "CompTIA Pentest+",
        //   icon: "penp",
        // },
        {
          name: "CompTIA Security+",
          icon: "secp",
        },
        {
          name: "HCIA Routing & Switching",
          icon: "hciars",
        },
        {
          name: "CCNA Intro to Cybersecurity",
          icon: "ccna_in_sec",
        },
      ],
    },
  }),
};
</script>
