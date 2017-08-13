var express = require('express');
var router = express.Router();

var webs = require("../models/webs");
/* GET users listing. */
router.get('/', function (req, res, next) {
    webs.find({},function(err,webs){
        res.json(webs);
    });
    
});

router.get("/add", function (req, res, next) {
    // var title = req.body.title;
    // var content = req.body.content;
    var title = "title";
    var content = "content";
    var new_web = new webs({title:title,content:content,createDate:new Date()});
    new_web.save(function (err, new_web) {
        if (err) return console.error(err);
        res.send("new_web");
    });


})

module.exports = router;