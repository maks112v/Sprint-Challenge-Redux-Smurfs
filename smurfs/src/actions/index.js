import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const TOGGLE_EDITOR = 'TOGGLE_EDITOR';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
    type: FETCH_START
  });
  axios
    .get('http://localhost:3333/smurfs')
    .then(arr => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: arr.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAILURE,
        payload: err
      })
    })
}

export const addSmurf = data => dispatch => {
  dispatch({
    type: POST_START
  });
  axios
    .post('http://localhost:3333/smurfs', data)
    .then(arr => {
      dispatch({
        type: POST_SUCCESS,
        payload: arr.data
      })
    })
    .catch(err => {
      dispatch({
        type: POST_FAILURE,
        payload: err
      })
    })
}

export const toggleEditor = () => dispatch => {
  dispatch({type: TOGGLE_EDITOR});
}