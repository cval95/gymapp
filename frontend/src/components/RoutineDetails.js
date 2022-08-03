import {useRoutinesContext} from '../hooks/useRoutinesContext'
import { Link } from 'react-router-dom';

const RoutineDetails = ({routine}) => {

  const { dispatch } = useRoutinesContext()

  const handleClick = async () => {
    const response = await fetch('/api/routines/' + routine._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ROUTINE', payload: json})
    }
  }






  return (
    <Link to={`/routines/${routine._id}`}>
    
    <div className="workout-details">
    <h4>{routine.name}</h4>
    
    <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    
  </div>
  </Link>

  )
}

export default RoutineDetails