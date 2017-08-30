var express = require('express');//creates web server
var morgan = require('morgan');//how we are responding
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) //execute a function when a particular url is typed.
{
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article two',function(req,res){
  res.send('article two requested and will be served here')  ;
});

app.get('/article three',function(req,res){
  res.send('article three requested and will be served here')  ;
});

app.get('/article one',function(req,res){
  res.send('article one requested and will be served here')  ;
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
