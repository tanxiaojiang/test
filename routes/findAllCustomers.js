/**
 * Created by Administrator on 2017/5/22.
 */

var express=require('express');
var router=express.Router();

//导入mysql模块
var mysql=require('mysql');
var dbConfig=require('../db/dbconfig');
var customersql=require('../db/customersql');
//使用dbconfig.js配置文件去创建一个连接池
var pool=mysql.createPool(dbConfig.mysql);

module.exports=function (request,response,next) {
  //链接
   pool.getConnection(function (err,connection) {
     //建立链接，查询是所有数据
       connection.query(customersql.queryAll,function (err,result) {
            //释放链接
            connection.release();
            //将数据传到页面上去

           response.render('customer_list',{page_title:'客户信息',data:result});
       });
   });
};

