<!--  -->
<template>
  <div
    class="m-menu"
    @mouseleave="detailLeave"
  >
    <dl
      class="nav"
      @mouseleave="menuLeave"
    >
      <dt>全部分类</dt>
      <dd
        v-for="(item,index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
    >
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{ item.title}}</h4>
        <span
          v-for="(v, i) in item.items"
          :key="v+'_'+i"
        >{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      curDetail: null,
      timer: null,
      menuList: []
    };
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  },
  created() {
    api.getMenuList().then(res => {
      // console.log(res);
      this.menuList = res.data.data;
    });
  }
};
</script>
<style scoped>
</style>