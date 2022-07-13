const mongoose = require('mongoose')

const Schema = mongoose.Schema

const routineSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: "Workout"
    }],
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});




const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
   
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
});

module.exports =
mongoose.models.Workout || mongoose.model('Workout', workoutSchema)
module.exports = mongoose.model('Excerise', exerciseSchema)
module.exports = mongoose.model('Routine', routineSchema)

