<template>
  <div class="price-top">
    <h3>门票+纪念品</h3>
    <div class="tickets">
      <div class="adult">
        <p class="abults">成人票·普陀山门票+吉祥香套餐(乘船前星巴克旁集散服务中心服务台取票)</p>
        <p class="abultTime">16:30前可订今日票</p>
        <p class="span">
          <span class="color-y">有条件退</span>
          <span class="color-c">需取票</span>
        </p>
        <p class="color-g">
          <a href="javascript:;">
             已售3000+  |  购买须知
            <img src="../../assets/imgzlh/lunbo/next.png">
          </a>    
        </p>
      </div>
      <div class="price">
        <span class="rmb">¥</span>
        <span class="money">168</span>
        <button class="btn" @click="go">加入订单</button>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push("/pay");
    }
  }
}
</script>
<style scoped>
.price-top{
  margin-top:.9375rem;
  text-align: left;
  padding: .0625rem .9375rem;
}
.price-top h3{
  margin-bottom: .3125rem;
}
.tickets{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tickets .abult{
   widows: 15.625rem;
   height: 7.0625rem;
 }
.tickets .abults{
  border-top: .0625rem solid #ccc;
  margin-bottom: .25rem;
  padding-right: 0;
  line-height: 1.3125rem;
  font-size: .8125rem;
  color: #333;
 }
.tickets .abultTime{
   color: rgba(0, 134, 246, 0.7);
    margin-right: .3125rem;
    font-size: .6875rem;
    line-height: 1.125rem;
 }
 .tickets .span .color-y{
   color: rgba(255, 120, 0, 0.7);
   margin-right: .3125rem;
   font-size: .75rem;
 }
  .tickets .span .color-c{
    color: rgba(102, 102, 102, 0.7);
    margin-right: .3125rem;
    font-size: .75rem;
 }
  .tickets .color-g a{
    display: inline-block;
    font-size: .6875rem;
    color: #666;
  }
  .price{text-align: right;}
 .price .btn{
    display: inline-block;
    width: 4.25rem;
    height: 1.875rem;
    font-size: .75rem;
    line-height: 1.875rem;
    color: #fff;
    text-align: center;
    border-radius: .25rem;
    background: linear-gradient(90deg,#ffb42b 0,#ff7d13 100%);
 }
 .price .rmb{
     display: inline-block;
    font-size: 1.125rem;
    color:#ff6600;
 }
 .price .money{
    display: inline-block;
    margin-right: .0625rem;
    color:#ff6600;
    font-size:1.5625rem;
    line-height: 1.3125rem;
 }
</style>
