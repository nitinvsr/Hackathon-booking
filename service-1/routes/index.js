var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
const APIURL = 'http://localhost:3001/availableEvents';
var c = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname + "/" + "index.html");
});

router.get('/availableEvents', function(req, res, next) {
    request(APIURL,

        function(error, response, body) {

            if (!error && response.statusCode == 200) {
                res.send(body);

            }

        });

});

router.get('/confirm', function(req, res, next) {
    res.sendFile(__dirname + "/" + "confirm.html");
});
router.post('/valid', urlencodedParser, function(req, res) {
    res.send("Event Booked Successfully");
});

module.exports = router;