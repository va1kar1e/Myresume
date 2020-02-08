<template>
  <div class="navWrapper">
    <div id="menu" :class="{ active: isActive }">
      <el-menu mode="horizontal" :router="true">
        <el-menu-item
          id="logo"
          index="/"
          :route="{ name: 'Home' }"
          @click="handleSelect"
        >
          <logo></logo>
        </el-menu-item>
        <el-menu-item
          index="/resume"
          :route="{ name: 'Resume' }"
          @click="handleSelect"
          style="float: right;"
        >
          Download Resume
        </el-menu-item>
      </el-menu>
    </div>
    <div id="toggle" @click="select()">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    Logo
  },
  data() {
    return {
      activeIndex: "/",
      isActive: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    select: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
