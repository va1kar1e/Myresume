<template>
  <v-app>
    <Navbar :name="title" />
    <v-main>
      <v-container>
        <router-view v-on:childinit="onChildInit"></router-view>
      </v-container>
    </v-main> 
  </v-app>
</template>

<script>
import Navbar from "@/components/path/Navbar.vue";

export default {
  data() {
    return {
      title:"My Tools",
    };
  },
  methods: {
    onChildInit( value ){
      this.title = value;
    }
  },
  components: {
    Navbar,
  }
};
</script>
