<template>
<div @click="go" class="questions">
  <h3>问大家
    <span>(1条)</span>
  </h3>
  <div class="span">
    <img src="../../assets/imgzlh/lunbo/疑问.png" />
    <span> 那个寺院里有素面吃.谢谢你</span>
  </div>
</div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push("/zPro")
    }
  }
}
</script>
<style scoped>
.questions{
  margin-top:.9375rem; 
  border-top:.3125rem solid #ccc; 
  padding: .625rem .9375rem;
  text-align: left;
  line-height: 1.6875rem;
}
.questions h3{
  padding-top: .3125rem;
}
.questions .span span{
  display: inline-block;
  margin-top:.3125rem; 
  font-size: 12px;
}
</style>
