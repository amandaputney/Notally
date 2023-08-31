const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

//keep user schema as lean as possible to 
//minimize data payloud in the JWT

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true, //removes white space before and after the email string
        lowercase: true, //makes sure our unique validator works well
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { //automatically deletes properties from a document any that document is serialized
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

//mogoose middleware
//hases the password anytime the password has changed
userSchema.pre('save', async function(next) {
    //'this' keyword is the user document
    if (!this.isModified('password')) return next();
    //replace the password with the computed hash instead
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);