import { useEffect } from "react"
import { useRoutinesContext } from "../hooks/useRoutinesContext"

// components
import RoutineDetails from "../components/RoutineDetails"
import RoutineForm from "../components/RoutineForm"


const Routines = () => {

    const {routines, dispatch} = useRoutinesContext()

    useEffect(() => {
        const fetchRoutines = async () => {
          const response = await fetch('/api/routines')
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_ROUTINES', payload: json})
          }
        }
    
        fetchRoutines()
      }, [dispatch])





  return (
    <div className="home">
    <div className="workouts">
      {routines && routines.map(routine => (
        <RoutineDetails routine={routine} key={routine._id} />
      ))}
    </div>
    <RoutineForm />
  </div>
  )
}

export default Routines