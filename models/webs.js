var mongoose = require('mongoose');
var web = mongoose.model('web', new mongoose.Schema({
    cover:String,
    title: String,
    content: String,
    recommend: { type: Boolean, default: false },
    visit: { type: Number, default: 0 },
    createDate: Date
}));

module.exports = web;