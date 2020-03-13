<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Extracuricular Course</h2>
    <div class="py-4">
      <div
        v-for="(c, i) in item.course"
        :key="i"
        class="title"
      >
        <h2 :class="`headline font-weight-light mb-4 text-uppercase ${item.color}--text`">{{ c.name }}</h2>
        <p class="title font-weight-light">{{ c.vender }}</p>
      </div>
    </div>
  </v-col>
</template>

<style>
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
.content {
  margin-left: 12px;
}
</style>

<script lang="ts">
export default {
  name: "Extra",
  data: () => ({
    item: {
      color: "primary",
      course: [
        {
          name: "Basic Penetration (NIST-NICE, OWASP)",
          vender: "SEC Playground"
        },
        {
          name: "CCNA Routing & Switching",
          vender: "Cisco Certified Network Associate"
        },
        {
          name: "CCNA Introduction to Cybersecurity",
          vender: "Cisco Certified Network Associate"
        },
        {
          name: "HCIA Routing & Switching",
          vender: "Huawei Certified Network Associate"
        }
      ]
    }
  })
};
</script>

