import express from "express";
import { MongoClient, ObjectId } from "mongodb";
const bodyParser = require("body-parser");

//connection string
const connectionString =
  "mongodb+srv://paddaSukhwantSingh:VIdrmew6W8LarsC0@cluster0.r0aama3.mongodb.net/test";

class ExpressServer {
  constructor(
    hostname = process.env.LOCAL_HOST,
    port = process.env.DEFAULT_PORT
  ) {
    this.serverName = "Express Server API";
    this.hostname = hostname;
    this.port = port;

    //Auto start server
    this.initServer();
  }

  initServer = () => {
    this.server = express();
    this.server.use(bodyParser.json()); //for parsing application/json
    this.server.use(bodyParser.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded

    // simple create
    this.server.get("/createsimple", (req, res) => {
      async function run() {
        let cl = new MongoClient(connectionString);

        try {
          await cl.connect();
          let db = cl.db("testing1");
          let collection = db.collection("heroes");
          let hero = {
            name: "Iron Man",
            realname: "Tony Stark",
          };
          let result = await collection.insertOne(hero);
          console.log(result);
          res.send(result);
        } catch (err) {
          console.log("erroe in try to connect mongo", err);
        }
      }
      run().catch(console.dir);
    });
    //create from user's values
    this.server.post("/createuser", (req, res) => {
      async function run() {
        let cl = new MongoClient(connectionString);

        try {
          await cl.connect();
          let db = cl.db("testing1");
          let collection = db.collection("heroes");
          let hero = {
            name: req.body.name,
            realname: req.body.realname,
          };
          let result = await collection.insertOne(hero);
          console.log(result);
          res.send(result);
        } catch (err) {
          console.log("erroe in try to connect mongo", err);
        }
      }
      run().catch(console.dir);
    });
    //read all data
    this.server.get("/readall", (req, res) => {
      async function run() {
        let cl = new MongoClient(connectionString);

        try {
          await cl.connect();
          let db = cl.db("testing1");
          let collection = db.collection("heroes");
          const cursor = collection.find();
          let items = [];

          await cursor.forEach((item) => {
            let tempItem = {
              name: item.name,
              realname: item.realname,
            };
            items.push(tempItem);
          });

          console.log(items);
          res.send({
            msg: "Got a req at /readall",
            result: items,
          });
        } catch (err) {
          console.log("erroe in try to connect mongo", err);
        }
      }
      run().catch(console.dir);
    });
    //delete data with id given by user
    this.server.delete("/delete", (req, res) => {
      async function run() {
        let cl = new MongoClient(connectionString);

        try {
          await cl.connect();
          let db = cl.db("testing1");
          let collection = db.collection("heroes");
          let id = req.body.id;
          let result = await collection.deleteOne({_id: new ObjectId(id)});
          console.log(result);
          res.send({
            msg: "delete success",
            result: result,
          });
        } catch (err) {
          console.log("erroe in try to connect mongo", err);
        }
      }
      run().catch(console.dir);
    });
    this.server.put("/update", (req, res) => {
      async function run() {
        let cl = new MongoClient(connectionString);

        try {
          await cl.connect();
          let db = cl.db("testing1");
          let collection = db.collection("heroes");
          let tempName = {"name": req.body.name,
          "realname": req.body.realname
        };
          let result = await collection.updateOne({"name": tempName.name},{
            $set: {"realname": tempName.realname}
          });
          console.log(result);
          res.send({
            msg: "delete success",
            result: result,
          });
        } catch (err) {
          console.log("erroe in try to connect mongo", err);
        }
      }
      run().catch(console.dir);
    });

    // listening to port
    this.server.listen(this.port, () => {
      console.log(
        `${this.serverName} Started at http://${this.hostname}:${this.port}/`
      );
    });
  };
}

//Export module
module.exports = ExpressServer;
