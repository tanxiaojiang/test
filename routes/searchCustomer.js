/**
 * Created by Administrator on 2017/5/22.
 */


// 【客户修改】业务模块
var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbconfig');
var customersql = require('../db/customersql');

// 使用dbconfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

module.exports=function (req,res,next) {
   pool.getConnection(function (err,connection) {
      var condition;
      var parmaKey=req.body.condtionKey;
      switch(parmaKey){
          case 'username':
             condition=customersql.queryByUsername;
             break;
          case 'email':
              condition=customersql.queryByEmail;
              break;
          case 'mobile':
              condition=customersql.queryByMobile;
              break;
      };
      connection.query(condition,['%'+req.body.conditionVlaue+'%'],function (err,result) {
          //释放资源
          connection.release();

          res.render('customer_list',{page_title: "客户信息", data: result});
      });
   });

};