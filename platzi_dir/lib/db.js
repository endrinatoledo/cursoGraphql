const { MongoClient } = require('mongodb');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORT } = process.env;

// const mongoUrl = `mongodb+srv://etoledo:1234@cluster0.wpli2.mongodb.net/test`;
const mongoUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
let connection

async function connectDB() {

  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection

}

module.exports = connectDB;