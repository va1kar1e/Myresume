<template>
  <v-container class="text-center">
    <v-col class="mb-1" cols="12">
      <h2 class="display-1 font-weight-bold mb-1 text-uppercase">About Me</h2>
      <v-row justify="center">
        <v-col cols="12">
          <p
            v-for="(content, i) in contentText"
            :key="i"
            class="title font-weight-light text-left text-md-justify"
            v-html="content"
          >
            {{ content }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
p {
  padding: 0px 10px 0px 20px !important;
}
</style>

<script lang="ts">
export default {
  data: () => ({
    contentText: [
      "&nbsp;&nbsp;&nbsp;&nbsp;Hi, My name is Siwanont Sittinam. I am a dedicated, hardworking, and proactive Cybersecurity Engineer. I am interested in Cybersecurity, Networking, Data Analytics and Web Development.",
      "&nbsp;&nbsp;&nbsp;&nbsp;I constantly seek new knowledge and actively develop new skills to improve myself. I seek challenging chances where I can fully use my skills for the success of the organization.",
    ],
  }),
};
</script>
