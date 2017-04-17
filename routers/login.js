/**
 * Created by admin on 2017/4/11.
 */
var express = require('express');
var user = require('../service/login');
let router = express.Router();

router.get('/register',function (req,res) {
    user.insert({
        name:'choui',
        password:'choui',
        sex:'m',
        adress:'beijing  china',
        position:'web programer',
        phone:'110'
    }).then(function (result) {
        res.send(200,JSON.stringify(result.ops[0]));
    })

})

module.exports = router;