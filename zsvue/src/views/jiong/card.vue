<template>
  <div class="groom">
    <p class="title">为你推荐</p>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="20"
    >
      <van-card v-for="(item,i) of card" :key="i" class="card" @click="goDetails">
        <div slot="thumb">
          <img :src="item.pic">
        </div>
        <div class="tag" slot="tag">
          景点区域
        </div>
        <div class="title" slot="title">
          {{item.title}}
        </div>
        <div class="desc1" slot="desc">
          <span>{{item.score}}分</span>
          {{item.comment}}条点评
        </div>
        <div class="desc2" slot="desc">
          舟山景点人气榜第{{item.ranking}}名
        </div>
        <div class="desc3" slot="desc">
          距市中心{{item.range}}公里 
        </div>
        <div class="tags" slot="tags">
          <span>{{item.detail}}</span>
          <span>{{item.detail2}}</span>
        </div>
        <div class="price" slot="price" >
          ¥ <span>{{item.price}}</span> 起 
        </div>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import card from "./json/card"
export default {
  data(){
    return {
      card,
      loading:false,
      finished:false,
      arr:[]
    }
  },
  methods:{
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.arr.push(this.card[i]);
        }
        console.log(this.arr)
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.arr.length >= this.card.length) {
          this.finished = true;
          return;
        }
      }, 500);
    },
    goDetails(){
      this.$router.push("/zDetails");
    }
  }
}
</script>

<style scoped>
/* 为你推荐 */
.groom>.title{
  height:3.375rem;
  line-height:3.375rem;
  font-size:1.25rem;
  padding-left:1rem;
  text-align:left;
}
.groom .card{
  height:7.875rem;
  margin-top:0;
  background:#fff;
  position: relative;
}
.groom .card:after{
  content:"";
  display:block;
  width:21.25rem;
  height:.0625rem;
  background:#dbdbdb;
  position: absolute;;
  top:-0.1875rem;
}
.groom .card img{
  width:7.1875rem;
  height:6.375rem;
  border-radius:.3125rem;
}
.groom .van-card__content{
  left:1.5625rem;
  height:6.375rem;
}
.groom .card div{
  text-align:left;
  margin-bottom:.1875rem;
}
.groom .card .tag{
  padding:.1875rem .25rem;
  background:rgba(0,0,0,.5);
  border-radius:6px 0;
  position: relative;
  top:-0.0625rem;
  color:#fff;
}
.groom .card .title{
  font-size:1.125rem;
  font-weight:600;
  padding-bottom: 0;
}
.groom .card .desc1>span{
  color:#0096f6;
  margin-right:.4375rem;
}
.groom .card .desc2{
  color:#f5190a;
}
/* .groom .card .desc3>span{
  columns: #eee;
  margin:0 .1875rem;
} */
.groom .card .tags>span{
  padding:.0625rem;
  border:.0625rem solid #ccc;
  border-radius:.1875rem;
  margin-right:.3125rem;
}
.groom .card .price{
  position:absolute;
  bottom:0;
  right:1.5rem;
}
.groom .card .price>span{
  font-size:1.5rem;
}
</style>