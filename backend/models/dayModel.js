const mongoose = require('mongoose')

const Schema = mongoose.Schema

const daySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
     name: {
        type: String,
        required: true
    },
    sets: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },

    }
]
    
}
,{ timestamps: true });






module.exports = mongoose.model('Routine', routineSchema)
