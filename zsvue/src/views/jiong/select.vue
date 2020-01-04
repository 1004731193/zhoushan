<template>
<van-row>
  <van-col class="header" span="24">
    <van-icon name="arrow-left" size="24"/>
    <van-search class="search" placeholder="请输入搜索关键词"/>
  </van-col>
  <van-col class="select" span="24">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </van-col>
  <van-col span="24">
    
  </van-col>
</van-row>
</template>

<script>
export default {
   data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  }
}
</script>

<style scoped>
.header{
  width:100%;
  height:2.75rem;
  line-height:1.95rem;
  padding:.375rem .375rem;
  display:flex;
}
.header .van-icon{
  line-height:2rem;
}
.header .van-search__content{
  width: 17rem;
  height:2rem;
  border-radius:20rem;
  margin-left:.625rem;
}
.header .van-search__content{
  height:2rem;
  background:#EFEFEF;
}
.header .van-cell{
  font-size:.8125rem !important;
}
.select{
  margin-top:2.75rem;
}
</style>