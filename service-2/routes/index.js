var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Go to /availableEvents to check the available movies' });
});

router.get('/availableEvents', function(req, res, next) {
    res.send("These are the available hackathons :<br/>Hackathon no 1: CodeHack <br/>Hackathon no 2: Uhack <br/>Hackathon no 3: HackItAll <br/>Hackathon no 4: Hack4Ever");

});

module.exports = router;