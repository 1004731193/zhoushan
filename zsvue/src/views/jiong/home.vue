<template>
<van-row>
  <van-col class="banner" span="24">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/img/banner1.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/banner2.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <router-link to="lwdBanner">
          <img src="../../assets/img/banner3.png">
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </van-col>
  <van-col class="grod" span="24">
    <div class="box">
      <div class="box-item">
        <img src="../../assets/img/gg_red.png">
        <img class="img" src="../../assets/img/gg_1.png">
        <p>景点/门票</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_orange.png">
        <img class="img" src="../../assets/img/gg_2.png">
        <p>主题乐园</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_green.png">
        <img class="img" src="../../assets/img/gg_3.png">
        <p>海洋馆</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_purple.png">
        <img class="img" src="../../assets/img/gg_4.png">
        <p>寺庙教堂</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_blue.png">
        <img class="img" src="../../assets/img/gg_5.png">
        <p>城市观光</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_6.png">
        <p>一日游</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_7.png">
        <p>高空景观</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_8.png">
        <p>赛事演出</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_9.png">
        <p>展览展馆</p>
      </div>
      <div class="box-item">
        <img src="../../assets/img/gg_10.png">
        <p>博物馆</p>
      </div>
    </div>
  </van-col>
  <!-- 人气景点 -->
  <van-col class="spot" span="24">
    <p class="title">人气景点</p>
    <van-tabs>
      <van-tab title="热门">
        <router-link v-for="(item,i) of hot" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
      <van-tab title="全家出游">
       <router-link v-for="(item,i) of qj" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
      <van-tab title="情侣出游">
        <router-link v-for="(item,i) of cp" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
      <van-tab title="海滨风情">
        <router-link v-for="(item,i) of hb" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
      <van-tab title="游普陀山">
       <router-link v-for="(item,i) of ys" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
      <van-tab title="畅游海岛">
        <router-link v-for="(item,i) of cy" :key="i" to="/zDetails">
          <div class="hot">
            <img :src="item.pic">
            <p>{{item.title}}</p>
            <span>¥ {{item.price}}</span>起
          </div>
        </router-link>
      </van-tab>
    </van-tabs>
    <p class="more">
      更多景点
      <van-icon name="arrow" color="#0086f6" />
    </p>
  </van-col>
  <!-- 广告 -->
  <van-col class="adver" span="24">
    <div>
      <img src="../../assets/img/banner4.jpg">
      <img src="../../assets/img/banner5.jpg">
      <img src="../../assets/img/banner6.jpg">
    </div>
  </van-col>
  <!-- 为你推荐 -->
  <van-col span="24">
    <card></card>
  </van-col>
</van-row>
</template>

<script>
//假数据文件
import spotJson from "./json/spot"
//card组件
import card from "./card.vue"
export default {
  components:{"card":card},
  data(){
    return {
      hot:spotJson.hot,
      qj:spotJson.qj,
      cp:spotJson.cp,
      hb:spotJson.hb,
      ys:spotJson.ys,
      cy:spotJson.cy,
    }
  },         
  mounted(){
    window.addEventListener("scroll",()=>{
      var scrollTop=document.documentElement.scrollTop
          ||document.body.scrollTop;
      if(scrollTop==0){
        search.className="";
      }else if(scrollTop>20){
        search.className="bg";
      }
    })
  },
}   
</script>

<style scoped>
.banner img{
  width:100%;
  height:10.25rem;
}
.grod{
  height:11.875rem;
}
.grod .box{
  width:22.5rem;
  height:11.875rem;
  margin:0 auto;
  padding:.9375rem .625rem 1.25rem;
  border-radius:.625rem;
  box-shadow:.0625rem .0625rem .3125rem .0625rem #ccc;
  position: relative;
  top:-0.625rem;
  background:#fff;
  display:flex;
  flex-wrap:wrap;
  margin-bottom:.3125rem;
}
.grod .box-item{
  width:4.1875rem;
  height:4.5rem;
  text-align:center;
  font-size:.75rem;
  position: relative;
}
.grod .box-item>img{
  height:50px;
  margin-bottom:.3125rem;
}
.grod .box-item>.img{
  position: absolute;
  top:0;left:.5rem;
}
/* 人气景点 */
.spot{
  height:29.0625rem;
}
.spot>.title{
  height:2.75rem;
  line-height:3.375rem;
  font-size:1.25rem;
  padding-left:1rem;
  text-align:left;
}
.spot .van-tab__pane{
  width:100%;
  height:21rem;
  padding:0 .75rem;
}
.spot .van-tab__pane .hot{
  width:33.3%;
  height:10.5rem;
  padding:.375rem .25rem;
  font-size:.875rem;
  text-align: left;
  float: left;
}
.spot .van-tab__pane .hot img{
  height:6.8125rem;
  border-radius:.25rem;
}
.spot .van-tab__pane .hot p{
  margin:.3125rem 0;
}
.spot .van-tab__pane .hot span{
  color:#ff6600;
}
.spot .more{
  height:2.75rem;
  line-height:2.75rem;
  color:#0086f6;
}
.spot .more .van-icon{
  position: relative;
  top:.15625rem;
}
.adver{
  height:6.875rem;
  padding:.9375rem 0;
  background:#f8f8f8;
}
.adver img:first-child{
  width:10.3125rem;
}
.adver img{
  width: 6.5625rem;
  height:5rem;
}

</style>