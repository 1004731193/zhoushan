<template>
  <header id="search">
    <van-icon name="home-o" color="#fff" size="24"/>
    <van-search class="search" placeholder="请输入搜索关键词"/>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  width:100%;
  height:2.75rem;
  line-height:1.95rem;
  padding:.375rem .375rem;
  position: fixed;
  top:0;
  display:flex;
  z-index:100;
}
header.bg{
  background:#efefef;
}
header .van-icon{
  line-height:2rem;
}
header .search{
  width: 17rem;
  height:2rem;
  border-radius:20rem;
  margin-left:.625rem;
}
header .van-search__content{
  height:2rem;
  background:#fff;
  /* background:#EFEFEF; */
}
header .van-cell{
  font-size:.8125rem !important;
}
</style>