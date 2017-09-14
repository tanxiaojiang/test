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

module.exports=function (req,res,next) {
    //获取从post页面传过来的值
    //debugger;
         var parma=req.body;
         pool.getConnection(function (err,connection) {
             //获取数据
             connection.query(customersql.addCustomer,[parma.username,parma.email,parma.mobile],function (err,result) {
                 connection.release();
                 res.redirect('/customer');
             });
         });
};