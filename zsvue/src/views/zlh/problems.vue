<template>
<div>
  <div class="ask">
    <i>
      <img @click="goback" src="../../assets/imgzlh/lunbo/左箭头.png" />
    </i>
    <h2>问答</h2>
  </div>
<div class="bg">
  <div class="question">
    <span class="on">常见问题</span>
    <span>预定、</span>
    <span>取票、</span>
    <span>退订、</span>
    <span>发票、</span>
    <span>支付等</span>
    <i>
      <img src="../../assets/imgzlh/lunbo/next.png" />
    </i>
  </div>
  <div class="Span">
    <div class="span-w">
      <img src="../../assets/imgzlh/lunbo/疑问.png" />
      <span> 那个寺院里有素面吃.谢谢你</span>
    </div>
    <div class="span-d">
      <img src="../../assets/imgzlh/lunbo/答疑.png" />
      <span> 暂无回答</span>
    </div>
  </div>
  <div class="quiz">
    <img src="../../assets/imgzlh/lunbo/提问.png">
    <span>我要提问</span>
  </div>
  <div class="gray">
    <p> 所有回答均由游友提供；版权属携程网所有，盗用必究！ </p>
  </div>
</div>
</div>
</template>
<script>
export default {
   methods:{
     goback(){
       this.$router.go(-1)
     }
   }
}
</script>
<style scoped>
.bg {
  top:0; left: 0;
  right: 0; bottom:0;
  position: fixed;
  margin: 3.75rem 0; 
  background: #eee;
  height: 100%;  
}

.ask i{
  float: left;
  padding-top:.625rem; 
  padding-left: .9375rem;
}
.ask h2{ 
  margin:.625rem auto;  
  text-align: center;
}
.question{
  height:3.75rem;
  padding: .625rem .9375rem;
  background: white;
  line-height: 1.875rem;
  margin-top: .0625rem;
  border-top:.1875rem solid #eee;
  border-bottom:.1875rem solid #eee;
}
.question .on{ 
  display: inline-block;
  float: left;
  width: 3.75rem;
  border: .0625rem solid red;
  color:red;
  font-size: .75rem;
  margin-right: .3125rem;
}
.question span+span{
  font-size: .8125rem;
  width: 2.5rem;
  float: left;
}
.question i{
  float:right;
  right: 0;
}
.Span{
  height: 7.125rem;
  text-align: left;
  padding: .625rem .9375rem;
  background: white;
  position: relative;
}
.Span .span-w{
  display: inline-block;
  margin-top:.3125rem; 
  font-size: 1.125rem;
  margin-bottom:.625rem; 
}
.quiz{
  width: 100%;
  height: 3.125rem;
  background: #ff5003;
  line-height: 3.125rem;
  position: fixed;
  bottom: 0;
}
.quiz img{
  width: 1.5625rem;
  margin-right: .3125rem;
}
.quiz span{
  color:white;
  display: inline-block;
  font-size: 1.25rem;
}
.gray p{
  font-size: .8125rem;
  margin-top: .625rem;
  color: #B3BDD4;
}
</style>
