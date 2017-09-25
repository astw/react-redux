import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function  loadCoursesSuccess(courses) {
  // step one1,
  //debugger;
  return {type: types.LOAD_COURSES_SUCCESS, courses:courses};     // return is an object, and it must have 'type' property
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
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

export function saveCourse(course) {
  return function(dispatch, getState){
    return courseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)):
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error =>{
      throw(error);
    });
  };
}
