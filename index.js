//jshint esversion: 6

const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");

const app = express();

app.use(bodyParser.urlencodedd{extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){

var crypto = req.body.crypto;
var regular = req.body.regular;
var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
var finalURL = baseURL + crypto + regular;

// The URL of the request is compressed into the variable called "finalURL"
request(finalURL, function(error, response, body){

var data = JSON.parse(body);
    var price = data.last;

// The <h1> is now a concatonation of the variables "crypto" and "regular", which is dependent on the selection by the user.
    res.write("<h1>The current price of " crypto  + " is: " + price + regular "</h1>");
    res.send();
  });
});

app.listen(3000, function() {
  console.log ("Server is running on port 300");
});
}
