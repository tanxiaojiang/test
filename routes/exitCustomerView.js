/**
 * Created by Administrator on 2017/5/22.
 */

// 【客户修改】视图模块
var express = require('express');
var router = express.Router();

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbconfig');
var customersql = require('../db/customersql');

// 使用dbconfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

module.exports=function (req,res,next) {
   //从页面上获取传过来的ID
    pool.getConnection(function (err,connection) {
       var parma= req.params;

       connection.query(customersql.getCustomerByID,[parma.userid], function (err,result) {
            connection.release();
           res.render('customer_edit', {page_title: "客户修改", data: result});
        })
    });

};