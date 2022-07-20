import {useState} from 'react'
import { useRoutinesContext } from '../hooks/useRoutinesContext'

const RoutineForm = () => {
const {dispatch} = useRoutinesContext

const [name, setName] = useState('')
const [error, setError] = useState(null)
const [emptyFields, setEmptyFields] = useState([])

const handleSubmit = async (e) => {
  e.preventDefault()

  const routine = {name}
  
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

    

    <button>Create Routine</button>
    {error && <div className="error">{error}</div>}
  </form>
  )
}

export default RoutineForm