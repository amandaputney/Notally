const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

// const SALT_ROUNDS = 6;

//keep user schema as lean as possible to 
//minimize data payloud in the JWT

const noteSchema = new Schema({
    text: {type: String, required: true},
    user: {
        type: ObjectId,
        required: true
    }
}, {
    timestamps: true,

        }
    
);

//mogoose middleware
//hashes the password anytime the password has changed
// noteSchema.pre('save', async function(next) {
//     //'this' keyword is the user document
//     if (!this.isModified('password')) return next();
//     //replace the password with the computed hash instead
//     this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
// });

module.exports = mongoose.model('Note', noteSchema);