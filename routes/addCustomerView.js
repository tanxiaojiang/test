/**
 * Created by Administrator on 2017/5/22.
 */

//转到添加页面上去
module.exports=function (req,res,next) {
   res.render('customer_add',{page_title:'客户新增'});
};