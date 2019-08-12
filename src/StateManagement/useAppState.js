import React,{ useState, useMemo, useContext } from 'react'


const AppContext = React.createContext({})
/**
 * Our custom React hook to manage state
 */


const useAppState = () => {
  const initialState = { loginStatus: false }

  // Manage the state using React.useState()
  const [state, setState] = useState(initialState)

  // Build our actions. We'll use useMemo() as an optimization,
  // so this will only ever be called once.
  const actions = useMemo(() => getActions(setState), [setState])

  return { state, actions }
}

// Define your actions as functions that call setState().
// It's a bit like Redux's dispatch(), but as individual
// functions.
const getActions = setState => ({
  login: () => {
    setState(state => ({ ...state, loginStatus: true }))
  },
  logout: () => {
    setState(state => ({ ...state, loginStatus: false }))
  }
})


// Sub-components can use this function. It will pick up the
// `state` and `actions` given by useAppState() higher in the
// component tree.
const useAppContext = () => {
    return useContext(AppContext)
  }

export { AppContext, useAppState, useAppContext }