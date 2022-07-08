const Routine = require('../models/routineModel')
const mongoose = require('mongoose')

//get all workouts
const getRoutines = async(req, res) =>{
    const routines = await Routine.find({}).sort({createdAt: -1})

    res.status(200).json(routines)
}





//get a single workout 
const getRoutine = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such routine'})
    }
  
    const routine = await Routine.findById(id)
  
    if (!routine) {
      return res.status(404).json({error: 'No such routine'})
    }
  
    res.status(200).json(routine)
  }
  


// create a new workout
const createRoutine = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const routine = await Routine.create({ title, load, reps })
    res.status(200).json(routine)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

///delete a routine
const deleteRoutine = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such routine'})
    }
  
    const routine = await Routine.findOneAndDelete({_id: id})
  
    if(!routine) {
      return res.status(400).json({error: 'No such routine'})
    }
  
    res.status(200).json(routine)
  }


//update routine
const updateRoutine = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such routine'})
    }
  
    const routine = await Routine.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!routine) {
      return res.status(400).json({error: 'No such routine'})
    }
  
    res.status(200).json(routine)
  }
  





module.exports = {
    getRoutine,
    getRoutine,
    createRoutine,
    deleteRoutine,
    updateRoutine

  }