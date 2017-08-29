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

router.get("/details",function(req, res, next){
    var id = req.query.id;
    webs.findById(id, function (err, item) {
        item.visit++;
        item.save(function (err, saveitem) {
            //添加访问次数
            res.redirect("/html/web/details.html?id="+req.query.id);
        })
    });
})

router.get("/recommond/:id",function(req, res, next){
    var id = req.params.id;
    webs.findById(id, function (err, item) {
        item.recommond=!item.recommond;
        item.save(function (err, saveitem) {
            res.json(saveitem);
        })
    });
})

router.get("/item/:id", auth, function (req, res, next) {
    var id = req.params.id;
    webs.findById(id, function (err, item) {
        res.json(item);
    });
})

router.get("/delete/:id", auth, function (req, res, next) {
    webs.remove({ _id: req.params.id }, function (err) {
        res.json(true);
    });
});

router.get("/create",auth, function (req, res, next) {
    res.redirect("/html/web/create.html");
})

router.get("/edit/:id",auth, function (req, res, next) {
    res.redirect("/html/web/edit.html?id="+req.params.id);
})



router.post("/add", auth, function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var cover = req.body.cover;
    var new_web = new webs({ cover: cover, title: title, content: content, createDate: new Date() });
    new_web.save(function (err, new_web) {
        if (err) return console.error(err);
        res.json(new_web);
    });
})


router.post("/edit", auth, function (req, res, next) {
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var cover = req.body.cover;

    webs.findById(id, function (err, saveitem) {
        saveitem.title = title;
        saveitem.content = content;
        saveitem.cover =cover;
        saveitem.save(function (err, saveitem) {
            res.json(saveitem);
        })
    })
})


module.exports = router;