//功能:多对多聊天室:02_chart.js
//服务器端
//创建web服务器
var app = require("http").createServer();
//创建io对象
var io = require("socket.io")(app);
//绑定监听端口 5000
app.listen(5000);
//创建变量保存客户端数量
var clientCount = 0;
//为io对象绑定事件 connection  触发代表有客户端接入
io.on("connection",socket=>{
    //客户端数量加1
    clientCount++;
    //创建字符串nickname  "user:1"
    var nickname = "";
    //广播事件 enter  昵称
    io.emit("enter", "客服:亲!您有什么需要帮助的码?");
    //将接收到的内容广播给客户端
    socket.on("message",data=>{
        io.emit("list",nickname +  data);
    })
    //接收客户端退出
    socket.on("disconnect",data=>{
        io.emit("leave",nickname + "下线了");
    })
})