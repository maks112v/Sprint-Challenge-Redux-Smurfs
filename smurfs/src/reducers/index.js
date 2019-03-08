/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_START, FETCH_SUCCESS } from '../actions'

const initalState = {
  smurfs: [],
  fetchingSmurfs: true,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    default:
      return state
  }
}

export default reducer;