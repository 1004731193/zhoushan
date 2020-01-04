<template>
<van-row>
  <van-col span="24">
    <header>
      <van-icon name="arrow-left" size="24"/>
      <p>我的收藏</p>
      <span>编辑</span>
    </header>
  </van-col>
  <van-col span="24">
    <p class="lately">近一个月收藏</p> 
  </van-col>
  <van-col class="house" span="24">
    <div class="none">
      <img src="../../assets/img/icon_no_collected.png">
      <p>没有收藏</p>
      <p>美好的事物值得收藏</p>
      <van-button type="info">去首页看看</van-button>
    </div>
  </van-col>
</van-row>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  height:2.75rem;
  line-height:2.75rem;
  display:flex;
  justify-content:space-between;
  padding:0 .5rem;
  border-bottom:.0625rem solid #ddd;
}
header>p{
  font-size: 1.25rem;
}
header .van-icon{
  margin-top:0.75rem;
}
.lately{
  height:1.6875rem;
  line-height:1.6875rem;
  font-size:.875rem;
  padding-left:10px;
  display: none;
  text-align: left;
}
.van-col+.van-col{
  background:#f5f5f5;
}
.house{
  height:35.875rem;
}
.house .none>img{
  height:6rem;
  margin-top:3.125rem;
}
.house .none>p:nth-child(2){
  margin-top:1.25rem;
  margin-bottom:.625rem;
}
.house .none>p:nth-child(3){
  font-size: .8125rem;
  color:#999;
}
.house .none>.van-button{
  width:11.25rem;
  height:2.75rem;
  margin-top:2.5rem;
  border-radius:.1875rem;
  font-size:1rem;
}
</style>