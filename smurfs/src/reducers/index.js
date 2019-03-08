/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_START, FETCH_SUCCESS, TOGGLE_EDITOR, FETCH_FAILURE, POST_START, POST_SUCCESS } from '../actions'

const initalState = {
  smurfs: [],
  fetchingSmurfs: true,
  addingSmurf: false,
  updatingSmurf: null,
  deletingSmurf: false,
  showEditor: false,
  error: null,  
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
    case FETCH_FAILURE:
      return  {
        ...state,
        error: action.payload
      }
    case TOGGLE_EDITOR: 
      return {
        ...state,
        showEditor: !state.showEditor,
      }
    case POST_START:
      return {
        ...state,
        addingSmurf: true,
      }
    case POST_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    default:
      return state
  }
}

export default reducer;