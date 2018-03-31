const COLLECTION_NAME = "comaru";
const DATA_SOURCE = process.env.DATA_SOURCE || "mongodb://localhost:27017/test";
const MongoClient = require("mongodb").MongoClient;

let database;

const getDatabase = () => {
  return new Promise((resolve, reject) => {
    if (database) {
      resolve(database);
      return;
    }

    MongoClient.connect(DATA_SOURCE, (error, client) => {
      if (error) {
        console.log(error);
        return;
      }

      database = client.db().collection(COLLECTION_NAME);
      resolve(database);
    });
  });
}

const find = parameters => {
  return new Promise((resolve, reject) => {
    getDatabase().then(database => {
      database.find(parameters).toArray((error, records) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(records);
      });
    }).catch(error => {
      reject(error);
    });
  });
}

module.exports = { find };
