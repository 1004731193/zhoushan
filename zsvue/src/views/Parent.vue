<template>
<div>
  <div class="frame">
    <div class="tab-item" v-if="to==0">
      <search></search>
      <home></home>
    </div>
    <div class="tab-item" v-if="to==1">
      <house></house>
    </div>
    <div class="tab-item" v-if="to==2">
      <list></list>
    </div>
    <div class="tab-item" v-if="to==3">
      <me></me>
    </div>
  </div>
  <van-tabbar class="tabber" v-model="active" fixed @change="toggleTab" active-color="#29A1F7">
    <van-tabbar-item>
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[0].active : icon[0].inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item>
      <span>收藏</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[1].active : icon[1].inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item>
      <span>订单</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[2].active : icon[2].inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item>
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[3].active : icon[3].inactive"
      >
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>
<script>
import search from "./jiong/search"
import home from "./jiong/home.vue"
import house from "./jiong/house.vue"
import me from "./jiong/me.vue"
import list from "./jiong/list.vue"
  export default ({
    components:{
      "search":search,
      "home":home,
      "house":house,
      "me":me,
      "list":list
    },
    data() {
      return {
        active:0,
        to:0,
        icon:[
          {
            active:require('../assets/img/home2.png'),
            inactive:require('../assets/img/home.png')
          },
          {
            active:require('../assets/img/shou2.png'),
            inactive:require('../assets/img/shou.png')
          },
          {
            active:require('../assets/img/list2.png'),
            inactive:require('../assets/img/list.png')
          },
          {
            active:require('../assets/img/me2.png'),
            inactive:require('../assets/img/me.png')
          }
        ]
      }
    },
    methods:{
      toggleTab(e) {
        this.to=e;
        this.active=e;
      }
    }
  })
</script>

<style scoped>
.frame{
  padding-bottom:50px;
}
</style>