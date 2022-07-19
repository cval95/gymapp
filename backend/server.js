require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const routineRoutes = require('./routes/routines')
const userRoutes = require('./routes/user')

// express app
const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/routines', routineRoutes)
app.use('/api/user', userRoutes)

//conect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
// listen for requests
app.listen(process.env.PORT, () => {
  console.log('connect to db & listening on port', process.env.PORT)
})
})
.catch((error)=>{
  console.log(error)
})

