var express = require('express'),
    friends = require('./routes/friend');
var app = express();

app.get('/friends',friends.findAll);
app.listen(3000);
console.log('Listening on port 3000');
