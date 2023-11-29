const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.hpqjxf5.mongodb.net/';

connect(connectionString);

module.exports = connection;