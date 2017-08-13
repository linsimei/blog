var mongoose = require('mongoose');
var web = mongoose.model('web', new mongoose.Schema({
    title: String,
    content: String,
    createDate: Date
}));

module.exports = web;