var mongoose = require('mongoose');
var web = mongoose.model('web', new mongoose.Schema({
    cover:String,
    title: String,
    content: String,
    createDate: Date
}));

module.exports = web;