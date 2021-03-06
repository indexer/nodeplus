var express = require('express'),
    friends = require('./routes/friend');
var app = express();

app.configure(function()
        {
            app.use(express.logger('dev'));
            app.use(express.bodyParser());
        });
app.get('/friends',friends.findAll);
app.get('/friends/:id', friends.findById);
//app.post('/friends',friends.addFriend);
app.listen(3000);
console.log('Listening on port 3000');
