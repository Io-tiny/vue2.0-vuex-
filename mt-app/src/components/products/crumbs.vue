<!--  -->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>{{ $store.state.position }}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
</style>