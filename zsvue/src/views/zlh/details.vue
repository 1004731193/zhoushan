<template class="bg">
 <div class="parent">
    <div class="carousel">
      <div class="parent-img">
        <span class="span-b">
          <img @click="goback" src="../../assets/imgzlh/lunbo/左箭头.png">
        </span>
        <span class="span-b">
          <img src="../../assets/imgzlh/lunbo/爱心.png">
        </span>
      </div>
      <img class="carousel-img"
      src="../../assets/imgzlh/lunbo/lunbo1.jpg">
    </div>
    <div class="bell">
      <i>
        <img src="../../assets/imgzlh/lunbo/soundsize.png"/>
      </i>
      <van-notice-bar class="bar">
          普济禅寺又叫“前寺”，坐落在白华山南、灵鹫峰下，是全山供奉观音的主刹，和法雨寺、慧济寺并称三大寺。
      </van-notice-bar>
    </div>
    <div class="title">
      <div class="title-span">
        <span>所在景区:</span>
        <span class="span-color">普陀山风景区</span>
        <i>
          <img src="../../assets/imgzlh/lunbo/next (1).png"/>
        </i>
      </div>
      <div class="title-xh">
        <div class="txt">
          普陀山香火旺盛的寺庙
        </div>
        <i><img src="../../assets/imgzlh/lunbo/next.png"/></i>
      </div>
    </div>
    <div class="consult" @click="goserve">
      <img src="../../assets/imgzlh/lunbo/咨询.png" />
      <p>咨询</p>
    </div>
    <recommend></recommend>
    <cart></cart>
    <dispark></dispark>
    <rates></rates>
    <problem></problem>
    <hotel></hotel>
 </div>
</template>
<script>
import cart from './cart'
import dispark from './dispark'
import rates from './rates'
import recommend from './recommend'
import hotel from './hotel'
import problem from './problem'

export default {
  components:{
     recommend,
     cart,dispark,
     rates,hotel,
     problem
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    goserve(){
      this.$router.push("/wChat")
    },
  }
}
</script>
<style scoped>
.parent{width: 100%;}
.parent .carousel .carousel-img{  /*控制轮播图的大小*/
  height: 13.1875rem;
  position: relative;
}
.parent .carousel .parent-img{   /*相对父级*/
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top:.625rem;
  padding:0 .5rem;  top: .3125rem;
  z-index: 1;
}
.parent .carousel .parent-img .span-b{  /*小图标*/
  display: inline-block;
  height:  2.8125rem;
   width: 2.8125rem;
  line-height:  2.8125rem;
  border-radius:1.875rem; 
  text-align: center;
  background-color: rgba(255,255,255,.5);
}
.bell{position: relative;}
.bell i img{
  position: absolute;
  left: .625rem; top: .5625rem;
  z-index: 1;
}
.bell .bar{   /*小公告*/
  padding-left:2rem;
  animation-delay: 0s;
  animation-duration: 16.8006s;
  color:#1989fa; 
  background:#ecf9ff;
}
.title{  /*详情介绍所在地*/
  line-height:26px;
  height: 4.3125rem;
  padding: .3125rem .625rem;
}
.title .title-span{ /*所在*/
  margin-top:.1875rem; 
  text-align: left;
  padding: 0 .3125rem;
  font-size: .9375rem;
}
.title .title-span .span-color{  /*风景区*/
  color: #19a0f0;
}
.title .title-xh{ /*寺庙*/
  display: flex;
  justify-content: space-between; 
  margin-top:.1875rem; 
  text-align: left;
  padding: 0 .3125rem;
  font-size: .9375rem;
}
.consult{
  position: fixed;
  right: 1.5625rem;
  bottom: 5.25rem;
  width: 3.125rem;
  height: 3.125rem;
  border-radius:1.5625rem; 
  background: #9098a4;
}
.consult img{
  padding-top: .375rem;
}
.consult p{
  font-size: .75rem;
  color:white;
}
</style>
