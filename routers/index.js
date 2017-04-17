/**
 * Created by admin on 2017/4/11.
 */
//主路由页面
module.exports = function (app) {
    app.get('/',function (req,res) {
        res.redirect('login');
    })
    app.use('/list', require('./list'));//数据中心
    app.use('/users', require('./ucenter'));//用户中心
    app.use('/login', require('./login'));//登录中心
}