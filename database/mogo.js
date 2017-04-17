/**
 * Created by admin on 2017/4/13.
 */
var Mongolass = require('mongolass');
var mongo = new Mongolass();
mongo.connect('mongodb://localhost:27017/mymovies;');

var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

// 根据 id 生成创建时间 created_at
mongo.plugin('addCreatedAt', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
        });
        return results;
    },
    afterFindOne: function (result) {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        }
        return result;
    }
});

exports.User = mongo.model('user',{
    name:{type:'string'},
    password:{type:'string'},
    sex:{type:'string', enum: ['m', 'f', 'x']},
    adress:{type:'string'},
    position:{type:'string'},
    phone:{type:'string'}
});
exports.User.index({name:1},{unique:true}).exec();

