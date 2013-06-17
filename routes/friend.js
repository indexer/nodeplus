var mongo = require('mongodb');

var Server= mongo.Server,
    Db = mongo.Db,
    BSON=mongo.BSONPure;

var server = new Server('localhost',27017,{auto_reconnect:true});
db = new Db('friend',server);

db.open(function(err,db)
        {
            if(!err)
             {
                 console.log("Connected to 'friendsdb' database");
                 db.collection('friends',{strict:true},function(err,collection)
                     {
                         if(err)
                          {
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
