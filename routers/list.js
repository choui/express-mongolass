/**
 * Created by admin on 2017/4/11.
 */
var express=require('express');
let router = express.Router();

router.get('/getMovieList',function (req,res) {
    res.send('hello stranger! go to login first!!!')
})

module.exports = router;