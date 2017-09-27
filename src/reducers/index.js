//root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors,
  courses,    // means:  courses: courses(short hand proper name)
  ajaxCallsInProgress

});

export default rootReducer;
