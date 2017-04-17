/**
 * Created by admin on 2017/4/13.
 */
var User = require('../database/mogo').User;
function  insert(item){
    return User.create(item).exec();
}
function  getUserByName (name){
    return User.find({name:name}).addCreatedAt().exec();
}
module.exports ={insert,getUserByName}
