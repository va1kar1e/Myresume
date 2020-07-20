<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Certification</h2>
    <div v-for="(c, i) in item.course" :key="i" class="title">
      <h2 :class="`title font-weight-bold mb-2 text-uppercase primary--text`">{{ c.name }}</h2>
      <p class="subtitle-1 font-weight-light">{{ c.vender }}</p>
    </div>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Cert",
  data: () => ({
    item: {
      course: [
        {
          name: "HCIA: Routing & Switching",
          vender: "Huawei Certified Network Associate"
        }
      ]
    }
  })
};
</script>
