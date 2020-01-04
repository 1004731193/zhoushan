<template>
<!-- 大床房 -->
  <div>
    <div class="queen-size">
      <i class="next-img">
        <img src="../../assets/imgzlh/lunbo/左箭头.png" />
      </i>
      <i class="d-img">
        <img src="../../assets/imgzlh/dachuangfang/大床房.jpg" />
      </i>
    </div>
    <div class="tail">
      <div class="tail-span">
        <span class="font-c">¥</span>
        <span class="font-C">124</span>
        <span class="color-f">起/份</span>
        <i class="font-c">
          <img src="../../assets/imgzlh/dachuangfang/注意.png" />
        </i>
      </div>
      <div class="tail-txt">
        <span class="txt-fen">4.9分</span>
        <span class="txt-color">141条评论</span>
        <i class="i-img">
          <img src="../../assets/imgzlh/lunbo/next.png" />
        </i>
      </div>
    </div>
    <div class="temple">
      <span>普陀山易安居民宿1晚+可选普济禅寺</span>
      <i>
        <img src="../../assets/imgzlh/lunbo/next.png" />
      </i>
    </div>
  </div>
</template>
<style scoped>
/******** 顶层图片     *******/
.queen-size{
  position: relative;
  height: 13.125rem;
  width: 100%;
}  
.queen-size .next-img img{
  position: absolute;
  top: 1.125rem;
  left: 1.25rem;
}
.queen-size .d-img img{
  height: 13.125rem;
}
/*******人民币*****/
.tail{
  padding: .625rem .9375rem;
  display: flex;
  justify-content: space-between;
}
.tail .tail-span span{display: inline-block;}
.tail .tail-span .font-c{
  color:#ff6913;
  font-size: .75rem ;
}
/********** 评  论 **********/
.tail .tail-span .font-C{
  color:#ff843e;
  font-size: 1.5625rem;
}
.tail .tail-span .color-f{
  color:#999999;
  font-size: .75rem;
}
.tail-txt{padding-top: .3125rem}
.tail-txt .txt-fen{
  vertical-align: sub;
  color: #448aff;
}
.tail-txt .txt-color{
  vertical-align: sub;
  padding-left: .3125rem;
  color: #9b9b9b;
  font-size: .75rem;
}
.tail-txt .i-img img{
  width: 1.25rem;
  margin-left: .1875rem;
  padding-top: .25rem;
}
/******* 寺  庙 ******/
.temple{
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding:0 .9375rem;
  padding-top: .5rem;
  height: 1.9375rem;
}
/****** 地址 ******/

</style>

