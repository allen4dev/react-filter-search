import * as actionTypes from './actionTypes';

// Action creators
export function setTracks(response) {
  return {
    type: actionTypes.FETCH_TRACKS_SUCCESS,
    response,
  };
}

// export function requestTracks() {
//   return {
//     type: actionTypes.FETCH_TRACKS_REQUEST,
//   };
// }
