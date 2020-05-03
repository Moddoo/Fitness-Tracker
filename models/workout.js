const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day: {
        type: Date,
        default:Date.now
    },
    exercises: Array, 
});

const Workout = mongoose.model('workout', workOutSchema);
module.exports = Workout