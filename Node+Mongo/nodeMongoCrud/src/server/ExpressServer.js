import express from "express";
import { MongoClient } from "mongodb";
const bodyParser = require("body-parser");

//connection string
const connectionString =
  "mongodb+srv://paddaSukhwantSingh:VIdrmew6W8LarsC0@cluster0.r0aama3.mongodb.net/test";

class ExpressServer {
  constructor(
    hostname = process.env.LOCAL_HOST,
    port = process.env.DEFAULT_PORT |30
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

    this.server.listen(this.port, () => {
      console.log(
        `${this.serverName} Started at http://${this.hostname}:${this.port}/`
      );
    });
  };
}

//Export module
module.exports = ExpressServer;
