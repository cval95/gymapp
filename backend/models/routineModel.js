const mongoose = require('mongoose')

const Schema = mongoose.Schema

const routineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    workouts: [
        {
     name: {
        type: String,
        required: true
    },
    }
]
    
}
,{ timestamps: true });






module.exports = mongoose.model('Routine', routineSchema)

