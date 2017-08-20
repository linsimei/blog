var express = require('express');
var router = express.Router();
var auth = require("../middlewares/auth");


var webs = require("../models/webs");
/* GET users listing. */
router.get('/', function (req, res, next) {
    webs.find({}, function (err, webs) {
        res.json(webs);
    });

});

router.get("/:id",auth, function (req, res, next) {
    var id = req.params.id;
    webs.findById(id, function (err, item) {
        res.json(item);
    });

})

router.delete("/:id", function (req, res, next) {
    webs.remove({ _id: req.params.id }, function (err) {
        res.json(true);
    });
});

router.post("/add", function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var new_web = new webs({ title: title, content: content, createDate: new Date() });
    new_web.save(function (err, new_web) {
        if (err) return console.error(err);
        res.json(new_web);
    });
})


module.exports = router;