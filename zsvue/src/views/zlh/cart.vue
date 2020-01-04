<template>
  <van-card class="cart">
    <div slot="thumb" class="thumb"> 
      <img src="../../assets/imgzlh/lunbo/主景区.jpg"/>
      <van-tag color="#f2826a" class="color-b">主景区</van-tag>
    </div>
    <div slot="desc" class="desc">
      <div slot="title" class="title">相关景点</div>
      <div slot="desc" class="title2">普陀山风景区</div>
      <div slot="price" class="price">
        <span>¥30</span>起
      </div>
    </div>
    <div slot="price" class="price2">
      <img src="../../assets/imgzlh/lunbo/next.png" />
    </div>
  </van-card>
</template> 
<style scoped>
.cart{ 
  height: 5.75rem;
  position: relative;
}
.cart .thumb img{
  width: 6.25rem;
  height: 4.25rem;
  position: relative;
}
.cart .thumb .color-b{
  position: absolute;
  left:-0.125rem;
  top: 0rem;
}
.cart .desc{
  padding: .3125rem 0;
  text-align: left;
  padding-left: .625rem;
  font-size: 1rem;
  width: 13.125rem;
  height: 4.25rem;
}
.cart .desc .title{color:#999;}
.cart .desc .price span{color:red;}
.cart .price2{
  position: absolute;
  width: 1.5625rem;
  right:-0.1875rem;
  top:1.5625rem;
}
</style>

