<!--  -->
<template>
  <div class="page-default">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header";
export default {
  data() {
    return {};
  },
  components: {
    MyHeader
  }
};
</script>
<style scoped>
</style>