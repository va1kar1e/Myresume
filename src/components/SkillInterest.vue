<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Skill/Interest</h2>
    <v-chip
      :ripple="false"
      v-for="(item, i) in items"
      :key="i"
      class="ma-1"
      :color="item[0]"
      small
      outlined
    >
      {{ item[1] }}
    </v-chip>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "SkillInterest",
  data: () => ({
    dialog: false,
    items: [
      ["brown darken-3","Networking"],
      ["brown darken-3","Cybersecurity"],
      ["teal darken-3","Text Analysis"],
      ["cyan darken-4","Data Analytic"],
      ["cyan darken-4","Data Visualization"],
      ["yellow darken-4","Vue"],
      ["yellow darken-4","React"],
      ["green darken-3","MongoDB"],
      ["brown darken-1","NodeJS"],
      ["primary","Python"],
      ["primary","C#"],
      ["primary","Ruby"],
      ["primary","Go"],
      ["lime darken-3","Javascript"],
      ["lime darken-3","MERN Stack"],
      ["blue-grey darken-3","Internet Of Thing"],
      ["green accent-4","Writing Academic Paper"],
      ["green accent-4","Research"],
      ["deep-purple darken-3","Photographic"],
      ["deep-purple darken-3","Photo and Video Editing"],
      ["red darken-2","English"],
      ["red darken-2","Thai(Native)"]
    ]
  })
};
</script>

