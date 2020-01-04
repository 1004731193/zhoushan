//功能：学子商城服务器程序
//1:下载四个第三方模块
//express           web服务器
//mysql             mysql驱动
//express-session   会话对象
//cors              跨域
//[8080脚手架   5656服务器]
//npm i express mysql express-session cors
//2:引入第三方模块
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:15,
   database:"zhoushan"
})
//4:创建web服务器
var server = express();
server.use(bodyParser.urlencoded({
  extended:false
}));
//5:配置跨域
//允许跨域程序端口
server.use(cors({
    //允许哪个程序列表 脚手架
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    //每次请求验证
    credentials:true
}));
//6:配置session对象
server.use(session({
   secret:"128位安全字符串",//加密条件
   resave:true,            //请求更新数据
   saveUninitialized:true  //保存初始化数据
}))
//7:指定静态目录  public
server.use(express.static("public")); 
//8:启动监听端口  5050
server.listen(5050);

// 功能一;完成用户登录验证
server.get("/login",(req,res)=>{
  //1:获取参数 uname upwd
  var n = req.query.uname;
  var p = req.query.upwd;
  //2:创建sql
  var sql =" SELECT id FROM login WHERE uname = ? AND upwd = ?";
  //3:发送sql并且结果返回脚手架
  pool.query(sql,[n,p],(err,result)=>{
     //4:如果发生严重错误抛出
     if(err)throw err;
     //5:登录成功用户名密码有错
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"})
     }else{
       //6:登录成功
       //7:将登录成功用户的id保存到session对象中，最为登录成功的凭证
       req.session.uid = result[0].id;
       res.send({code:1,msg:"登录成功"});
     }
  })
})

//用户注册
server.post("/regist",(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var nickname = req.body.nickname;
  var obj = {};
  obj.id = "";
  obj.uname = uname;
  obj.nickname = nickname;
  var logObj = {};
  logObj.id = "";
  logObj.uname = uname;
  logObj.upwd = upwd;
  var sql ="insert into user_info set ?";
  var logSql ="insert into login set ?";
  //3:发送sql并且结果返回脚手架
  var selSql = "select id from user_info where uname = ?";
  pool.query(selSql,[uname],(selerr,selresult)=>{
    if(selerr) throw selerr;
    if(selresult == ""){
      pool.query(sql,[obj],(err,result)=>{
        //4:如果发生严重错误抛出
        if(err)throw err;
        //5:登录成功用户名密码有错
        if(result.affectedRows>0){
          pool.query(logSql,[logObj],(logerr,logresult)=>{
            if(logerr) throw err;
            if(logresult.affectedRows>0){
              res.send("1");
            }else{
             res.send("0");
          }
          })      
        }else{
           res.send("0");
        }
     })
    }else{
      res.send("-1");
    }
  });
});