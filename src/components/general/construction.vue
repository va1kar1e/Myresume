<template>
  <div class="construction">
    <v-img
      src="https://img.freepik.com/free-vector/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg?size=626&ext=jpg&ga=GA1.2.309548015.1608681600"
      class="my-3"
      contain
      min-height="80"
      max-height="300"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="black" />
        </v-row>
      </template>
    </v-img>
    <h2 class="display-1 mb-2 text-uppercase text-center">Construction - Reserve for the Future</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Construction"
    };
  }
};
</script>
