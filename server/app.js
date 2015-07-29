var express = require('express');
var app = express();
var path = require('path');

app.set('port',(process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.listen(app.get('port'), funtion(){
    console.log("Hey! We are listening on Port: " + app.get('port'));
});