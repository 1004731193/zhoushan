<template>
  <div class="comment">
    <div class="comment-left">
      <i>
        <img src="../../assets/imgzlh/lunbo/xiaolian.png" />
      </i>
      <span class="s-grade">4.7</span>
      <span class="s-pence">/5分</span>
      <span class="s-rommend">97%推荐</span>
    </div>
    <div class="comment-right">
      <span>17174人点评</span>
      <i><img src="../../assets/imgzlh/lunbo/next.png"/></i>
    </div>
  </div>
</template>
<style scoped>
.comment{  /*评分*/
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 2.625rem;
  padding: .625rem 0;
  margin:0 .9375rem;
  border-bottom: .0625rem solid #eee;
  border-top: .0625rem solid #eee;
}
.comment .comment-left{
  width: 10.375rem;
}
.comment .comment-right{
  width: 10.375rem;
  font-size: .75rem;
  text-align: right;
}
.comment .s-pence{
  color:#999;
  font-size: .875rem;
}
.comment .s-grade,.s-rommend{
   color: #ff7d13;
   margin-left: .3125rem;
   font-size: .9375rem;
}
</style>

