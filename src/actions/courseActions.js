import * as types from './actionTypes';

export function  createCourse(course) {
  // step one1,
  //debugger;
  return {type: types.CREATE_COURSE, course:course};     // return is an object, and it must have 'type' property
}


