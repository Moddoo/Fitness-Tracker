const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day: {
        type: Date,
        default:Date.now
    },
    exercises: Array, 
    
},
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

workOutSchema.virtual(`totalDuration`)
             .get(function() {
                 if(this.exercises) return this.exercises.reduce((a,b) => { return a += b.duration },0)
             });

module.exports = mongoose.model('workout', workOutSchema);