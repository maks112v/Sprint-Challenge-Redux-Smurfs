import {
  FETCH_START,
  FETCH_SUCCESS,
  TOGGLE_EDITOR,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
  TOGGLE_UPDATE,
  DELETE_START,
  DELETE_SUCCESS
} from '../actions'

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
      return {
        ...state,
        error: action.payload
      }
    case TOGGLE_EDITOR:
      return {
        ...state,
        showEditor: !state.showEditor,
        updatingSmurf: null,
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
    case POST_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case TOGGLE_UPDATE:
      return {
        ...state,
        showEditor: true,
        updatingSmurf: action.payload
      }
    case DELETE_START:
      return {
        ...state,
        deletingSmurf: true,
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        showEditor: false,
        updatingSmurf: null
      }
    default:
      return state
  }
}

export default reducer;