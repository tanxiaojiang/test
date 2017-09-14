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
        var  parma=req.params;
        connection.query(customersql.delete,[parma.userid],function (err,result) {
            connection.release();
            // res.redirect('/customer');
            res.render('customer_del',{psge_message:'删除成功!',data:result});
        });
    });
};
