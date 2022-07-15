import {useState} from 'react'
import { useRoutinesContext } from '../hooks/useRoutinesContext'

const RoutineForm = () => {
const {dispatch} = useRoutinesContext

const [name, setName] = useState('')
const [workout, setWorkout] = useState('')
const [exercise, setExercise] = useState('')
const [error, setError] = useState(null)
const [emptyFields, setEmptyFields] = useState([])

const handleSubmit = async (e) => {
  e.preventDefault()

  const routine = {name, workout, exercise}
  
  const response = await fetch('/api/routines', {
    method: 'POST',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (!response.ok) {
    setError(json.error)
    setEmptyFields(json.emptyFields)
  }
  if (response.ok) {
    setEmptyFields([])
    setError(null)
    setName('')
    setWorkout('')
    setExercise('')
    dispatch({type: 'CREATE_ROUTINE', payload: json})
  }

}






  return (
    <form className="create" onSubmit={handleSubmit}> 
    <h3>Create Routine</h3>

    <label>Routine Name:</label>
    <input 
      type="text" 
      onChange={(e) => setName(e.target.value)} 
      value={name}
      className={emptyFields.includes('name') ? 'error' : ''}
    />

    <label>Workout </label>
    <input 
      type="number" 
      onChange={(e) => setWorkout(e.target.value)} 
      value={workout}
      className={emptyFields.includes('workout') ? 'error' : ''}
    />

    <label>Exercise</label>
    <input 
      type="number" 
      onChange={(e) => setExercise(e.target.value)} 
      value={exercise}
      className={emptyFields.includes('exercise') ? 'error' : ''}
    />

    <button>Add Routine</button>
    {error && <div className="error">{error}</div>}
  </form>
  )
}

export default RoutineForm