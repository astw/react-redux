import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state =initialState.courses, action) {   // default is empty array

  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      // step 2
      // debugger;
       return action.courses;
    case types.CREATE_COURSE_SUCCESS:
        return [
          ...state, Object.assign({}, action.course)
        ];
    case types.UPDATE_COURSE_SUCCESS:
        return [
          ...state.filter(course=> course.id !== action.course.id),
          Object.assign({}, action.course)
        ];

    default:
      return state;
  }
}
