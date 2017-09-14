var express = require('express');
var router = express.Router();

//使用路由去查找对应的页面
var findAllCustomers=require('../routes/findAllCustomers');
var addCustomerHandler=require('../routes/addCustomerHandler');
//添加页面
var addCustomer=require('../routes/addCustomerView');
//修改页面以及方法
var editCustomer=require('../routes/exitCustomerView');
var editCustomerHandler=require('../routes/editCustomerHandler');
//删除
var deleteCustomer=require('../routes/deleteCustomer');
//查询
var searchCustomer=require('../routes/searchCustomer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//路由去获取数据
router.get('/customer',findAllCustomers); //查询所有数据

router.get('/customer/add',addCustomer); //添加页面
router.post('/customer/add',addCustomerHandler);
//修改页面以及方法
router.get('/customer/edit/:userid',editCustomer);
router.post('/customer/edit/:userid',editCustomerHandler);

//删除
router.get('/customer/delete/:userid',deleteCustomer);
//查找
router.post('/customer/search',searchCustomer);
module.exports = router;
