<template>
  <div class="header">
    <el-row class="hidden-md-and-down">
      <el-col :span="13" :justify="start">
        <h1 class="header-name header-name-lg-up">SIWANONT SITTINAM</h1>
        <h3>A Network Engineer</h3>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
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
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="hidden-sm-and-up">
      <el-col :span="24">
        <h1 class="header-name header-name-xs">SIWANONT SITTINAM</h1>
        <h3>C Network Engineer</h3>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.header-name {
  color: black;
}
.header-name-lg-up {
  font-size: 3em;
}
.header-name-md-sm {
  font-size: 2em;
}
.header-name-xs {
  font-size: 2em;
}
</style>
