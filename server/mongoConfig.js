const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);
const dbName = 'columbiainvoices';
const db = client.db(dbName);
const collectionName = db.collection('invoices');


module.exports = {
    client,
    dbconnect: collectionName
};