/**
 * Created by admin on 2017/4/11.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.send('hello stranger!')
})

module.exports = router;