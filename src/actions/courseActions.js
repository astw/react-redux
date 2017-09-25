import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function  loadCoursesSuccess(courses) {
  // step one1,
  //debugger;
  return {type: types.LOAD_COURSES_SUCCESS, courses:courses};     // return is an object, and it must have 'type' property
}

export function loadCourses(){
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses =>{
      dispatch(loadCoursesSuccess(courses));
    }).catch((err)=>{
       throw(err);
    });
  };
}
