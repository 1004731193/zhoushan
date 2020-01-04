//创建web服务器
var app = require("http").createServer();
//创建nio对象
var io = require("socket.io")(app);
//绑定监听端口
app.listen(5000);
//绑定默认事件  connection 客户连接服务器触发事件
io.on("connection",(socket)=>{
    //发送数据个一客户
    socket.emit("abc","1234567890");
    //接收客户端数据
    socket.on("bcd",data=>{
        console.log("客户端数据:" + data);
    });
    //服务器发送广播消息
    io.emit("www","广播消息啊啊啊啊 啊啊 啊啊");
    io.emit("xxx","下线了!!!!!!!!!!");
});
