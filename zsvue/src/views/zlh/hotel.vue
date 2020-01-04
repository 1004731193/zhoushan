<template>
  <div class="title-top">
    <h3>门票+酒店</h3>
    <div class="flex">
      <div class="total">
        <p class="title-txt">普陀山易安居民宿1晚+可选普济禅寺</p>
        <p class="daytime">2天1晚</p>
        <p class="management">
          <span>酒店到景点870m</span>
          <span class="fen">4.9分</span>
        </p>
      </div>
      <div class="RMB">
        <span class="rmb">¥</span>
        <span class="money">168</span>
        <button class="btn">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
import double from "./double"
export default {
  components:{
    double
  }
}
</script>
<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
} 
.title-top{
  margin: .9375rem 0;
  text-align: left;
  padding: 1.25rem .9375rem;
  border-top:.3125rem solid #ccc; 
}
.title-top h3{
  margin-bottom: .3125rem;
}
.total{
  width: 15.625rem;
  height: 4.493125rem;
}
.title-top .title-txt{
  margin-bottom: .25rem;
  padding-right: 0;
  line-height: 1.3125rem;
  font-size: .875rem;
  color: #333;
}
.title-top .daytime{
  width: 4.0625rem;
  height: 1.375rem;
  text-align: center;
  color: #19a0f0;
  border: 1px solid rgba(25,160,240,.3);
}
.title-top .management span{
  display: inline-block;
  margin-right: .8125rem;
  margin-top: .3125rem;
  color: #999;
  font-size: .875rem;
}
.title-top .management .fen{
  color: #099fde;
  font-size: .8125rem;
}
.flex .RMB{
  width: 4.7825rem;
  height: 3.375rem;
  text-align: right
}
.RMB .btn{
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
 .RMB .rmb{
   display: inline-block;
  font-size: 1.125rem;
  color:#ff6600;
 }
 .RMB .money{
  display: inline-block;
  margin-right: .0625rem;
  color:#ff6600;
  font-size:1.5625rem;
  line-height: 1.3125rem;
 }
</style>
