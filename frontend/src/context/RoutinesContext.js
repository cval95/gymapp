import { createContext, useReducer } from 'react'

export const RoutinesContext = createContext()

export const routinesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ROUTINES':
      return { 
            routines: action.payload 
      }
    case 'CREATE_ROUTINES':
      return { 
        routines: [action.payload, ...state.routines] 
      }
    case 'DELETE_ROUTINES':
      return { 
        routines: state.routines.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const RoutinesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(routinesReducer, { 
    routines: null
  })
  
  return (
    <RoutinesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </RoutinesContext.Provider>
  )
}