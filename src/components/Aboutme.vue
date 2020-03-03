<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-1">
      About Me
    </h2>
    <v-row justify="center">
      <v-col cols="12">
        <p class="title font-weight-light text-left text-md-justify">
          {{ contentText }}
        </p>
      </v-col>
    </v-row>
  </v-col>
</template>

<style>
p {
  padding: 0px 5px 0px 20px;
}
</style>

<script lang="ts">
export default {
  name: "Header",
  data: () => ({
    contentText:
      "Hi, My nickname is Books. I am a dedicated, hardworking, and proactive Computer Engineer. I am interested in Networking, Cybersecurity, Data Analytics and Web Developement. I constantly seek new knowledge and actively develop new skills to improve myself. I seek challenging chances where I can fully use my skills for the success of the organization."
  })
};
</script>
