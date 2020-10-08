<template>
  <v-col class="mb-2" cols="12" md="12" lg="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Recognitions
    </h2>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        v-for="(c, i) in item.course"
        :key="i"
        class="title"
      >
        <v-img
          :src="require('@/assets/images/recognition/' + c.image + '.jpg')"
          contain
          min-height="100"
          max-height="100"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="black"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <br />
        <h2 :class="`title font-weight-bold mb-2 text-uppercase text-center`">
          {{ c.what }}
        </h2>
        <p class="subtitle-1 font-weight-light text-center">{{ c.when }}</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Recogntion",
  data: () => ({
    item: {
      course: [
        {
          what: "CONSOLATION PRIZE AWARD",
          when: "Huawei ICT Competition 2019 ",
          who: "Huawei Technologies (Thailand)",
          image: "hict",
        },
        {
          what: "CREATIVE DESIGN AWARD",
          when: "Thailand Financial Cybersecurity 2017",
          who:
            "ETDA, Bank of Thailand, Securities and Exchange Commission of Thailand",
          image: "finsec",
        },
      ],
    },
  }),
};
</script>
