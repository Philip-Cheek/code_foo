var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res) {
 res.render("index");
});

app.listen(5000, function() {
 console.log("listening on port 8000");
});