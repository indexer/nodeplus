var mongo = require('mongodb');
var mongo = require('mongodb');

var Server= mongo.Server,
    Db = mongo.Db,

    var server = new Server('localhost',27017,{auto_reconnect:true});

db.open(function(err,db)

        {
            if(!err)
             {
                 console.log("Connected to 'friendsdb' database");
                 db.collection('friends',{strict:true},function(err,collection)
                     {
                         if(err)
                              console.log("The 'friends' collection does not exit");
                            populateDB();                          }
                     });
             }
        
        });

exports.findAll = function(req,res)
{
    db.collection('friends',function(err,collection)
    {
        collection.find().toArray(function(err,items)
        {
            res.send(items);
        });
    });

};

export.addFriend = (function(req,res)
        {
 var  friend = req.body;
 console.log('Adding friend : ' + JSON.stringify(wine));
 db.collection('friends', function(err, collection) {
 collection.insert(friends, {safe:true}, function(err, result) {
 if (err) {
 res.send({'error':'An error has occurred'});
 } else {
 console.log('Success: ' + JSON.stringify(result[0]));
 res.send(result[0]);
 }
 });
 });
        });

exports.findById =  function (req,res)
{
    var id = req.params.id;
    console.log('Retriving friends'+id);
    db.collection('friends',function(err,collection)
            {
                collection.findOne({'_id':new BSON.ObjectID(id)},function(err,items)
    {
        res.send(items);
    });
            });
};

var populateDB=function()
{
    var friends = [
    {
        name: "Naing Ye Min",
        age:'30',
        country:'Myanmar'
    },
    {
        name:"Bone Pyae Sone",
        age:"20",
        country:'Myanmar'
    },
    {
        name:"Thiha Tun",
        age:"24",
        country:"Myanmar"
    }
        ];

        db.collection('friends',function(err,collection){
        collection.insert(friends,{safe:true},function(err,result){}); 
        });
};

var Server= mongo.Server,
    Db = mongo.Db,

    var server = new Server('localhost',27017,{auto_reconnect:true});

db.open(function(err,db)

        {
            if(!err)
             {
                 console.log("Connected to 'friendsdb' database");
                 db.collection('friends',{strict:true},function(err,collection)
                     {
                         if(err)
                              console.log("The 'friends' collection does not exit");
                            populateDB();                          }
                     });
             }
        
        });

exports.findAll = function(req,res)
{
    db.collection('friends',function(err,collection)
    {
        collection.find().toArray(function(err,items)
        {
            res.send(items);
        });
    });

};

exports.findById =  function (req,res)
{
    var id = req.params.id;
    console.log('Retriving friends'+id);
    db.collection('friends',function(err,collection)
            {
                collection.findOne({'_id':new BSON.ObjectID(id)},function(err,items)
    {
        res.send(items);
    });
            });
};

var populateDB=function()
{
    var friends = [
    {
        name: "Naing Ye Min",
        age:'30',
        country:'Myanmar'
    },
    {
        name:"Bone Pyae Sone",
        age:"20",
        country:'Myanmar'
    },
    {
        name:"Thiha Tun",
        age:"24",
        country:"Myanmar"
    }
        ];

        db.collection('friends',function(err,collection){
        collection.insert(friends,{safe:true},function(err,result){}); 
        });
};
