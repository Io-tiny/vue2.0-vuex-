<template>
  <div class='m-products-list'>
    <ul>
      <li
        v-for="(item) in nav"
        :key="item.key"
        :class="{'s-nav-active': item.active}"
      >{{ item.name }}</li>
    </ul>
    <el-row>
      <item
        v-for="(item, index) in productList"
        :key="index"
        :meta='item'
      />
    </el-row>
  </div>
</template>

<script>
import Item from "./item.vue";
import api from "@/api";
export default {
  created() {
    api.getProductsList().then(res => {
      this.productList = res.data.data;
    });
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格",
          active: false
        },
        {
          key: "s-sale",
          name: "人气",
          active: false
        }
      ],
      productList: []
    };
  },
  components: {
    Item
  }
};
</script>
<style lang='scss'>
</style>