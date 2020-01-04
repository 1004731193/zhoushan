<template>
<van-row class=" bg_gray">
  <van-col class="login" span="24">
    <div class="cap">
      <!-- <img src="../../assets/img/me.png"> -->
    </div>
    <p>
      <router-link to="wLogin">请登录</router-link>
    </p>
  </van-col>
  <van-col class="list" span="24">
    <p>
      <van-icon name="user-o" />
      编辑人生
      <van-icon name="arrow" />
    </p>
    <p>
      <van-icon name="bill-o" />
      我的钱包
      <van-icon name="arrow" />
    </p>
    <p>
      <van-icon name="flag-o" />
      我的足迹
      <van-icon name="arrow" />
    </p>
    <p>
      <van-icon name="orders-o"/>
      我的订单
      <van-icon name="arrow" />
    </p>
    <p @click="goQus">
      <van-icon name="question-o"/>
      常见问题
      <van-icon name="arrow" />
    </p>
    <p>
      <van-icon name="share" />
      退出登录
      <van-icon name="arrow" />
    </p>
    <div>
      客服电话:10101
    </div>
    <span>服务时间: 9:00~23:00</span>
  </van-col>
</van-row>
</template>

<script>
export default {
  methods:{
    goQus(){
      this.$router.push("/lwdCollapse")
    }
  }
}
</script>

<style scoped>
.login{
  height:10rem;
  padding-top:2.3125rem;
  background:url(../../assets/img/login_bg.png) no-repeat;
  background-size:contain;
}
.login .cap{
  width:5.125rem;
  height:5.125rem;
  background:#fff url(../../assets/img/user.png) no-repeat;
  background-size:cover;
  border-radius: 50%;
  margin: 0 auto .25rem;
  line-height:4.5rem; 
}
.list p{
  height:2.5625rem;
  padding:10px;
  background:#fff;
  text-align:left;
  font-size:.875rem;
  border-bottom:1px solid #e3e3e3;
}
.list p .van-icon{
  position: relative;
  top:.125rem;
}
.list p .van-icon:last-child{
  left:14.6875rem;
}
.list div{
  height:2.25rem;
  padding:10px 0;
  margin:1.25rem 0 .625rem;
  color:#ffb000;
  background:#fff;
  font-size:.875rem;
}
.list span{
  color:#ccc;
  font-size:.75rem;
}
</style>