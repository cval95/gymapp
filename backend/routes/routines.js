const express = require('express')

const {
  getRoutines, 
  getRoutine, 
  createRoutine, 
  deleteRoutine, 
  updateRoutine
 
} = require('../controllers/routineController')

const router = express.Router()

// GET all Routines
router.get('/', getRoutines)

// GET a single Routine
router.get('/:id', getRoutine)

// POST a new Routine
router.post('/', createRoutine)

// DELETE a Routine
router.delete('/:id', deleteRoutine)

// UPDATE a Routine
router.patch('/:id', updateRoutine)

module.exports = router