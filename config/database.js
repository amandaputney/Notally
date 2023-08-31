const mongoose = require('mongoose');

//database connection string
mongoose.connect(process.env.DATABASE_URL);

//shortcut variable
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});