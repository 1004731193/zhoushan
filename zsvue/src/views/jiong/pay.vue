<template>
<van-row>
  <van-col class="head" span="24">
    <van-icon name="arrow-left" @click="goback"></van-icon>
    <van-nav-bar title="门票" />
  </van-col>
  <van-col class="body" span="24">
    <!-- 日期 -->
    <van-panel title="门票">
      <div class="date">
        使用日期
        <div>
          <p>
            今天12-16
            <br>不可订
          </p>
          <p class="active">
            明天 12-17 <br>
            <span>¥168</span>
          </p>
          <p>
            跟多日期 <br>
            <span>¥168起</span>
            <van-icon name="arrow" color="#19a0f0" />
          </p>
        </div>
      </div>
    </van-panel>
    <!-- 成人票 -->
    <div class="adult">
      <div class="term">
        <strong>成人票</strong>
        <p>
          <span>
            <van-icon name="warn-o" color="#ffae13"/>有条退款
          </span>
          <van-icon name="certificate"/>入园保障
        </p>
        <p>
          购买须知
          <van-icon name="arrow" color="#19a0f0"/>
        </p>
      </div>
      <div class="price">
        <span>¥162</span>
        <p>
          <van-stepper v-model="value"/>
        </p>
      </div>
    </div>
    <!-- 出行人信息 -->
    <van-panel title="出行人信息">
      <div class="data">
        <div class="d1">
          <p>
            新增/更换<van-icon name="arrow" color="#19a0f0"/>
          </p>
        </div>
        <div class="d2">
          <van-cell-group>
            <van-field
              v-model="uname"
              label="真实姓名"
              placeholder="须与证件上的名字一致"
            />
            <van-field
              v-model="uphone"
              label="联系手机"
              placeholder="接收确认短信" 
              @blur="getPhone"
            />
          </van-cell-group>
        </div>
      </div>
    </van-panel>
    <!-- 购买保险 -->
    <van-panel title="购买保险">
      <div @click="goMore" class="more">
        更多保险<van-icon name="arrow"></van-icon>
      </div>
      <div class="safe">
        众安携程门票意外险 标准款
        <van-tag round type="primary">详情</van-tag>
        <span class="s1">¥3</span><span class="s2">/1人x1</span>
        <input type="radio">
      </div>
    </van-panel>
  </van-col>
  <!-- 去支付 -->
  <van-col class="pay" span="24">
    <div class="total">
      总额: ¥<span>0</span>
    </div>
    <div class="detail">
      明细
    </div>
    <div class="serve" @click="goserve">
      <van-icon name="service-o"/>
      客服
    </div>
    <div class="to-pay">
      去支付
    </div>
  </van-col>
</van-row>
</template>

<script>
export default {
  data(){
    return {
      value:1,
      uname:"",
      uphone:"",
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    goserve(){
      this.$router.push("/wChat")
    },
    goMore(){
      this.$router.push("/lwdTicket")
    },   
    getPhone(){
      var reg=/^[1][3-9][0-9]{9}$/;
      if(!reg.test(this.uphone)){
        this.$dialog.alert({
          message: '请输入正确的手机号'
        });
        return;
      }
    }
  }
}
</script>

<style scoped>
.head{
  position: fixed;
  z-index:100;
}
.head .van-icon{
  position: absolute;
  z-index: 100;
  top:.75rem;left:.625rem;
  font-size:24px;
}
.van-nav-bar__title{
  font-weight:600;
  font-size:1.25rem;
}
.body{
  margin-top:2.875rem;
  background:#C0C7CF;
  padding:.625rem .375rem 4.375rem;
}
.body .van-cell-group{
  border-radius: .3125rem;
  text-align:left;
}
.body .van-cell{
  border-radius: .3125rem .3125rem 0 0;
  font-size:1rem;
  background:#EFF0F2;
}
/* 日期 */
.body .date{
  height:4.25rem;
  padding-left:.75rem;
  line-height:4.25rem;
}
.body .date>div{
  width:15.875rem;
  height:4.25rem;
  padding:.625rem 0;
  float: right;
  display:flex;
}
.body .date>div>p{
  width:4.75rem;
  height:3rem;
  font-size:.75rem;
  border:.0625rem solid #ccc;
  border-radius:.375rem;
  margin-right:.375rem;
  line-height:20px;
  text-align:center;
  padding-top:.1875rem;
  color:#19a0f0;
}
.body .date>div>p:first-child{
  color:#ccc;
}
.body .date>div>p>span{
  color:#ff4400;
}
.body .date>div>p .van-icon{
  position: relative;
  left:.625rem;
  top:-0.3125rem;
}
.active{
  border:.0625rem solid #19a0f0 !important;
}
/* 成人票 */
.body .adult{
  width:22.6875rem;
  height:6.25rem;
  padding:.9375rem;
  display:flex;
  background:#fff;
  border-radius:.3125rem;
  margin:.625rem 0;
}
.body .adult~.van-panel{
  margin-bottom:.625rem;
}
.body .adult .term{
  text-align:left;
  width:14.25rem;
  height:4.375rem;
}
.body .adult .term p{
  font-size:.75rem;
}
.body .adult .term p:nth-child(2){
  margin:.375rem 0;
}
.body .adult .term p:nth-child(2)>span{
  color:#ffae13;
  margin-right:.3125rem;
}
.body .adult .term p:last-child{
  color:#19a0f0;
}
.body .adult .term .van-icon,
.body .data>.d1>p .van-icon,
.body .more .van-icon{
  position: relative;
  top:1.5px;
}
.body .price{
  text-align:right;
}
.body .price span{
  font-size:1.25rem;
  color:#ff6600;
}
.body .price p{
  margin-top:.625rem;
}
/* 出行人信息 */
.body .data{
  height:10.375rem;
  padding:0 .75rem;
}
.body .data>.d1{
  height:2.5625rem;
  padding-top:.625rem;
  margin-bottom:1rem;
}
.body .data>.d1>p{
  width:5rem;height:1.9375rem;
  line-height:1.9375rem;
  text-align: center;
  border:1px solid #ccc;
  border-radius:.3125rem;
  color:#19a0f0;
  font-size:.75rem;
}
.body .data>.d2 .van-field{
  background:#fff;
}


/* 购买保险 */
.body .more{
  position: absolute;
  top: 1rem;right:1rem;
  color: #19a0f0;
  font-size:.8125rem;
}
.body .safe{
  height:3.125rem;
  padding:.875rem .75rem 0;
}
.body .safe .s1{
  margin-left:1.625rem;
  color:#ff4400;
}
.body .safe .s2{
  font-size:.75rem;
}
.body .safe input{
  position: relative;
  top:.1875rem;
  width:1rem;height:1rem;
  margin-left:10px;
}


/* 支付 */
.pay{
  height:3.125rem;
  padding:.5rem 0 .5rem .625rem;
  line-height:2.125rem;
  display:flex;
  background:#fff;
  box-shadow:0 0 .1875rem .0625rem #ccc;
  position: fixed;
  bottom:0;
}
.pay .total{
  width:9.5rem;
  height:2.125rem;
  color:#ff4400;
  text-align:left;
}
.pay .total span{
  font-size:24px;
}
.pay .detail{
  height:2.125rem;
  padding-right:.625rem;
  border-right:1px solid #ccc;
  color:#19a0f0;
}
.pay .serve{
  width:3.125rem;
  font-size:.75rem;
}
.pay .to-pay{
  width:7rem;
  height:3.125rem;
  line-height:3.125rem;
  background:#ff7d13;
  color:#fff;
  position: absolute;
  right:0;
  top:0;
}
</style>