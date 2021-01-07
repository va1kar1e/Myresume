<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('@/assets/images/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="shrink mt-1 font-weight-bold" contain
        >Path</v-toolbar-title
      >
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn href="/" text>
        <span class="mr-2">Home</span>
        <v-icon color="white">fas fa-home</v-icon>
      </v-btn>
      <v-btn href="/profile" text>
        <span class="mr-2">My Profile</span>
        <v-icon color="white">fas fa-user</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-menu bottom close-on-click dark>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="d-flex d-md-none">
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item href="/">
          <v-list-item-icon>
            <v-icon color="white">fas fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="/profile">
          <v-list-item-icon>
            <v-icon color="white">fas fa-user</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
</style>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
  },
};
</script>
