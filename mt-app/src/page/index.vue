<!--  -->
<template>
  <div class="page-index">
    <el-row>
      <el-col :span='5'>
        <m-menu />
      </el-col>
      <el-col :span='19'>
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <container :navList='isStyleList' />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import Container from "@/components/index/container.vue";
export default {
  data() {
    return {
      isStyleList: [
        {
          tab: "all",
          text: "全部"
        },
        {
          tab: "food",
          text: "约会聚餐"
        },
        {
          tab: "spa",
          text: "丽人SPA"
        },
        {
          tab: "movie",
          text: "电影演出"
        },
        {
          tab: "trival",
          text: "品质出游"
        }
      ]
    };
  },
  components: {
    MMenu,
    MLife,
    Container
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/index/index.scss";
</style>