var express = require('express');
var app = express();

app.get('/friend',function(req,res){
res.send([{name:'Naing Ye Min'},{name:'Bone Pyae Sone'},{name:'Thiha Tun'}]);
});

app.listen(3000);
console.log('Listening on port 3000');
