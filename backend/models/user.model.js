const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    weight: {type: Number, required: true},
    height: {type: Number, required: true}

}, {
    timestamps: true,
});

// export model
const User = mongoose.model('User', userSchema);
module.exports = User;