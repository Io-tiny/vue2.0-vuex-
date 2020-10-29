<!--  -->
<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span='3'
        class="left"
      ><img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        >
      </el-col>
      <el-col
        :span='15'
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder='请输入内容'
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button
            type='primary'
            icon='el-icon-search'
          ></el-button>
          <dl
            class="hotPlace"
            v-if="isHostPlace"
          >
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotPlaceList"
              :key="index"
            >
              <router-link :to="{name:'goods', params:{ name: item }}">{{ item }}</router-link>
            </dd>
            <!-- <dd>
              <router-link to="/s">999连锁旅馆</router-link>
            </dd>
            <dd>
              <router-link to="/s">尚优客快捷酒店</router-link>
            </dd>
            <dd>
              <router-link to="/s">7天连锁酒店</router-link>
            </dd> -->
          </dl>
          <dl
            class="searchList"
            v-if="isSearchList"
          >
            <dd
              v-for="(item, index) in searchList"
              :key="index"
            >
              <router-link :to="{name:'goods', params:{ name: item }}">{{ item }}</router-link>
            </dd>
            <!-- <dd>
              <router-link to="/s">火锅自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/s">火锅 重庆</router-link>
            </dd> -->
          </dl>
        </div>
        <p class="suggest">
          <a
            href="#"
            v-for="(item, index) in searchList"
            :key="index"
          ></a>
          <!-- <a href="#">999连锁旅馆</a>
          <a href="#">尚优客快捷酒店</a>
          <a href="#">7天连锁酒店</a> -->
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      isFoucs: false,
      hotPlaceList: ["京东第一度假村", "aa"],
      searchList: ["aa", "bb"],
      suggestList: []
    };
  },
  computed: {
    isHostPlace() {
      return this.isFoucs && !this.searchWord;
    },
    isSearchList() {
      return this.isFoucs && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFoucs = true;
    },
    blur() {
      setTimeout(() => {
        this.isFoucs = false;
      }, 2000);
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
</style>