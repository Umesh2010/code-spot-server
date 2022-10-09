const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://vercel-admin-user:1WZmkA08qLXpa165@cluster0.fzdi6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("spot");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

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