<template>
  <div class="header">
    <el-row class="hidden-md-and-down">
      <el-col :span="13" :justify="start">
        <h1 class="header-name header-name-md-down">SIWANONT SITTINAM</h1>
        <h3>Network Engineer</h3>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="hidden-lg-and-up">
      <el-col :span="24">
        <h1 class="header-name">SIWANONT SITTINAM</h1>
        <h3>Network Engineer</h3>
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
.header-name-md-down {
  font-size: 7em;
}
</style>
