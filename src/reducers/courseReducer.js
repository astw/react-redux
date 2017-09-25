import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state =initialState.courses, action) {   // default is empty array

  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      // step 2
      // debugger;
       return action.courses;

    default:
      return state;
  }
}
