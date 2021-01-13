<template>
  <v-app>
    <Navbar :name="title" />
    <v-main>
      <v-container>
        <router-view v-on:childinit="onChildInit" :key="componentKey"></router-view>
      </v-container>
    </v-main> 
  </v-app>
</template>

<script>
import Navbar from "@/components/path/Navbar.vue";

export default {
  name: "Path",
  data() {
    return {
      title:"Path",
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
