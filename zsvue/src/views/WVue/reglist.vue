<template>
<div class="regist">
    <van-icon @click="goback" class="return" color="#fff" name="arrow-left" size="36" />
     <div class="cover">
        <van-field class="input" required clearable right-icon="question-o"  @click-right-icon="$toast('用户名格式为3~12为数字字母组成')" v-model="uname" label="用户名" placeholder="请输入用户名"></van-field>
        <van-field class="input" required right-icon="question-o"  @click-right-icon="$toast('密码格式为3~12为数字字母组成')" type="password" v-model="upwd" label="密码" placeholder="请输入密码"></van-field>
        <van-field class="input" type="password" v-model="twopwd" label="确定密码" placeholder="确定密码"></van-field>
        <van-field class="input" v-model="nickname" label="昵称" placeholder="请输入昵称"></van-field>
        <van-checkbox class="checkbox" v-model="check" shape="square"><router-link to="#" class="serve">我接受服务条款</router-link></van-checkbox>
        <van-button :disabled="!check" class="btn" @click="registInfo" size="large" type="info">注册</van-button>
    </div>   
</div>

</template>
<script>
export default {
    data(){
        return {
            check : false,
            uname:"",
            upwd:"",
            twopwd:"",
            nickname:"",
        }
    },
    methods:{
        registInfo(){
            var uname = this.uname;
            var upwd = this.upwd;
            var twopwd = this.twopwd;
            var nickname = this.nickname;
            var reg = /^[0-9a-zA-Z]{3,12}$/;
            if(!reg.test(uname)){
                this.$toast("用户名格式不正确");
                return;
            }
            if(!reg.test(upwd)){
                this.$toast("密码格式不正确");
                return;
            }
            if(upwd !== twopwd){
                this.$toast("两次密码不一致");
                return;
            }
            var queryString = `uname=${uname}&upwd=${upwd}&nickname=${nickname}`;
            // this.axios.post("regist",Qs.stringify({
            //     uname,
            //     upwd,
            //     nickname,
            // }))
            this.axios.post("regist",queryString).then(result=>{
                if(result.data == 1){
                    this.$toast("注册成功");
                }else if( result.data == -1){
                    this.$toast("此用户以存在");
                    return;
                }else{
                    this.$toast("注册失败");
                }
            });
        },
        goback(){
            this.$router.push("/wLogin");
        }
    }
}
</script>

<style scoped>
.regist{
    height: 667px;

    background-image: url(../../assets/WPic/regist.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.cover{
    padding:50% 40px 0;
}
.return{
    float: left;
    margin-top:10px;
    width:36px;
    height: 36px;
}
.checkbox{
    font-size:16px;
    margin:10px 0;
    padding-left:2px;
}
.serve{
    color:#fff;
}
.input{
    border:1px solid rgb(243, 243, 243);
    border-radius: 6px;
    margin-top:6px;
}
</style>
