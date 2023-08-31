// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');

//delete these SHOP variables
//https://gist.github.com/jim-clark/57b646abbb6c0ce09f9fa948eab6febc
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

//create user example
//const user = await User.create({name: Larua, email: 'laura2@gmail.com, password: 'abcd})
//user