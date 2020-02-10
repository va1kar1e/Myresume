<template>
  <div id="header">
    <el-row class="hidden-lg-and-down">
      <el-col :span="13" :justify="start">
        <h1 class="header-name header-name-xl">SIWANONT SITTINAM</h1>
        <h3>A Network Engineer</h3>
      </el-col>
      <el-col :span="4">
        <div id="profilepic">
          <img src="@/assets/images/profilepic.jpg" class="img-xl" />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="hidden-md-and-down hidden-xl-only">
      <el-col :span="13" :justify="start">
        <h1 class="header-name header-name-lg">SIWANONT SITTINAM</h1>
        <h3>A Network Engineer</h3>
      </el-col>
      <el-col :span="4">
        <div id="profilepic">
          <img src="@/assets/images/profilepic.jpg" class="img-lg" />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="hidden-lg-and-up hidden-xs-only">
      <el-col :span="13">
        <h1 class="header-name header-name-md-sm">SIWANONT SITTINAM</h1>
        <h3>B Network Engineer</h3>
      </el-col>
      <el-col :span="4">
        <div id="profilepic">
          <img src="@/assets/images/profilepic.jpg" class="img-md-sm" />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="hidden-sm-and-up">
      <el-col :span="24">
        <h1 class="header-name header-name-xs">SIWANONT SITTINAM</h1>
        <h3>C Network Engineer</h3>
        <div id="profilepic">
          <img src="@/assets/images/profilepic.jpg" class="img-xs" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
@import "./header.scss";
</style>
