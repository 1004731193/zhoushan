<template>
    <div class="cover">
        <van-icon @click="goback" color="#fff" class="return" name="arrow-left" size="36" />
        <div class="load">
            <van-field class="input" v-model="uname" label="用户名" placeholder="请输入用户名"></van-field>
            <van-field class="input" type="password" v-model="upwd" label="密码" placeholder="请输入密码"></van-field>
            <div class="tz">
                <!-- <router-link to="wReg" class="forget">忘记密码</router-link> -->
                <router-link to="wReg" class="login">注册</router-link>
            </div>
            <van-button @click="login" size="large" type="info">登录</van-button>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            uname:"",
            upwd:"",
        }
    },
    methods:{
        login(){
            var uname = this.uname;
            var upwd = this.upwd;
            var reg = /^[a-zA-Z0-9]{3,12}$/;
            if(!reg.test(uname)){
                this.$toast("用户名格式不正确");
                return;
            }
            if(!reg.test(upwd)){
                this.$toast("密码格式不正确");
                return;
            }
            var url = "login";
            var obj = {uname,upwd};
            this.axios.get(url,{params:obj}).then(result=>{
                if(result.data.code == 1){
                    this.$router.push("/wReg");
                }else{
                    this.$dialog.alert({message:"登录失败"});
                }
            });
        },
        goback(){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.cover{
    height: 667px;  
    background-image: url(../../assets/WPic/login.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.return{
    float: left;
    margin-top:10px;
    width:36px;
    height: 36px;
}
.load{
    padding:50% 40px 0;
}
.input{
    border:1px solid rgb(243, 243, 243);
    border-radius: 6px;
    margin-top:6px;
}
a{
    font-size:16px;
    color:#fff;
}
.tz{
    text-align: right;
    padding-right:.625rem;
    margin : 10px 0;
}
</style>

