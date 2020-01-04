<template>
<van-row>
  <van-col class="title" span="24">
    <van-nav-bar
      title="门票完乐订单"
      left-arrow
    />
  </van-col>
  <van-col class="list bg_gray" span="24">
    <p>暂无相关订单</p>
  </van-col>
</van-row>
</template>

<script>
export default {

}
</script>

<style scoped>
.title .van-nav-bar__title{
  font-weight:600;
  font-size:1.25rem;
  height:2.75rem;
}
.list p{
  height:10rem;
  margin-top: 8.75rem;
  padding-top:8.75rem;
  background:url(../../assets/img//no-order-normal.png) no-repeat center;
  background-size:8rem auto;
  font-size: .875rem;
  font-weight:600;
}
</style>