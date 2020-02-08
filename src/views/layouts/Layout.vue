<template>
  <div class="app-wrapper">
    <Navbar></Navbar>
    <div class="main-container">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default {
  name: "Layout",
  components: {
    Navbar,
    Content
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  text-align: center;
  margin-top: 400px;
  min-height: 50vh;
}
</style>
