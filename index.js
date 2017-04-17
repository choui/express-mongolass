/**
 * Created by admin on 2017/4/11.
 */
var path = require('path');
var express = require('express');
var app = express();

//路由配置
var router = require('./routers/index');
router(app);
app.listen(3000);