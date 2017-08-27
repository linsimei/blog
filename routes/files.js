var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {

    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
    var file = req.files[Object.keys(req.files)[0]]
    var filepath = '/upload/' + file.name;
    var path = __dirname + '/../public' + filepath;
    // Use the mv() method to place the file somewhere on your server 
    file.mv(path, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send(filepath);
    });
});

module.exports = router;