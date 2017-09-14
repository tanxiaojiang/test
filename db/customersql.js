/**
 * Created by Administrator on 2017/5/22.
 */

//客户管理模块使用sql语句对象

var  customerSQL={
   //查询所有
    queryAll:'SELECT * FROM customers',
    addCustomer:'INSERT INTO customers VALUES(null,?,?,?)',
   //客户修改使用
    getCustomerByID:'SELECT * FROM customers WHERE userid = ?',
    editCustomer:'UPDATE customers set ? WHERE userid = ?',
    //删除使用
    delete:'DELETE FROM customers WHERE userid = ?',
    //查询使用
    queryByUsername:'SELECT * FROM customers WHERE username LIKE ?',
    queryByEmail:'SELECT * FROM customers WHERE email LIKE ?',
    queryByMobile:'SELECT * FROM customers WHERE mobile LIKE ?',
};
module.exports=customerSQL;