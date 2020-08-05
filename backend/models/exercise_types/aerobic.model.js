const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aerobicExerciseSchema = new Schema({
    username: {type: String, required: true},
    activity: {type: String, required: true},
    duration: {type: Number, required: true},
    distance: {type: Number, required: true},
    location: {type: String, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true,
});

// export model
const AerobicExercise = mongoose.model('AerobicExercise', aerobicExerciseSchema);
module.exports = AerobicExercise;