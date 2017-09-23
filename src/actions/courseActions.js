export function  createCourse(course) {
  return {type: 'CREATE_COURSE', course:course};     // return is an object, and it must have 'type' property
}


