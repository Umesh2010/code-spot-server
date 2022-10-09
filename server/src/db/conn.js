const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://vercel-admin-user:1WZmkA08qLXpa165@cluster0.fzdi6.mongodb.net/?retryWrites=true&w=majority";
// mongodb+srv://code-spot:UwR7OC5eskgZDxG8@cluster0.bb6aqkq.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://vercel-admin-user:1WZmkA08qLXpa165@cluster0.fzdi6.mongodb.net/?retryWrites=true&w=majority
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("spot");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },
  // mongoose.connect("mongodb+srv://vismay:Tanvi8758116124@cluster0.ikpvs.mongodb.net/vismayecommerce?authSource=admin&replicaSet=atlas-ovspe7-shard-0&readPreference=primary&ssl=true",{useNewUrlParser:true})

  getDb: function () {
    return _db;
  },
};

// mongooes connection success

// const mongoose = require("mongoose");

// const db = {};
// db.mongoose = mongoose;
// db.url = process.env.ATLAS_URI || "mongodb+srv://code-spot:UwR7OC5eskgZDxG8@cluster0.bb6aqkq.mongodb.net/?retryWrites=true&w=majority";

// module.exports = db;