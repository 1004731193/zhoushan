<template>
    <div class="chat">
        <div class="goback">
            <van-icon @click="goback" color="#fff" class="return" name="arrow-left" size="36" />
        </div>
        <div class="content">
            <div class="showChat">

            </div>
        </div>
        <div class="bottom">
            <div class="inputInfo">
                <van-field v-model="inputValue" placeholder="请输入用户名" />
                <van-button @click="send" type="primary">发送</van-button>
            </div>               
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           ws:null,
           inputValue:""
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        send(){
            if(this.inputValue == ""){
                return;
            }
            this.ws.emit("message","用户 : "+this.inputValue);  
            this.inputValue = "";
        }
    },
    mounted(){
        let _this = this;
        var chat = document.getElementsByClassName("showChat")[0];
        let ws = io("ws://172.163.2.98:5000");
         _this.ws = ws;
        _this.ws.on("enter",data=>{
            var div = document.createElement("div");
            var span = document.createElement("div");
                var frame = document.createDocumentFragment();
            div.style.textAlign = "left";
            // div.innerHTML = `
            //     <img width="30px" height="30px" src="../../assets/WPic/dglvyou.jpg"
            //     />
            // `;
            var c = data.split(":");
            span.style.color = "blue";
                div.style.textAlign = "left";
                span.style.textAlign = "left";
            span.innerHTML = c[0] + ":";
                div.innerHTML =c[1];
                frame.appendChild(span);
                frame.appendChild(div);
                chat.appendChild(frame);
        });
        var chat = document.getElementsByClassName("showChat")[0];
        this.ws.on("list",data=>{  
                var dd = data;
                var c = dd.split(":");  
                console.log(c[0]);
            if(c[0] == "用户 ") {
                var div = document.createElement("div");
                var div1 = document.createElement("div");
                var frame = document.createDocumentFragment();
                div.style.textAlign = "right";
                div1.style.textAlign = "right";
                div.innerHTML = c[0];
                div.style.color = "#f00";
                div1.innerHTML = c[1];
                console.log(c[1]);
                frame.appendChild(div);
                frame.appendChild(div1);
                chat.appendChild(frame); 
            }else{
                var div = document.createElement("div");
                var div1 = document.createElement("div");
                var frame = document.createDocumentFragment();
                div.style.textAlign = "left";
                div1.style.textAlign = "left";
                div.innerHTML = "客服";
                div.style.color = "blue";
                div1.innerHTML = data;
                console.log(c[1]);
                frame.appendChild(div);
                frame.appendChild(div1);
                chat.appendChild(frame); 
            }

        })
    }
}
</script>

<style scoped>
.van-collapse-item{
    text-align: left;
  
}
.van-collapse-item div span{
      color:seagreen !important;
}
.chat{
    /* display: flex;
    flex-flow: column;
    justify-content: space-between; */
}
.goback{
    height:52px;
    background:rgb(30, 143, 248);
    /* position: fixed;
    left: 0;
    top:0; */
}
.return{
    float: left;
    margin-top:10px;
    width:36px;
    height: 36px;
}
.content{
    
}
.showChat{
    overflow: auto;
    padding:0 10px;
}
.inputInfo{
    width: 375px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}
.bottom{
    position: fixed;
    left: 0; 
    bottom: 0;
}
.van-button--normal{
    padding:0;
}
button{
    width:60px;
}
</style>
