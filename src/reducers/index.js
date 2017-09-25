//root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  authors,
  courses    // means:  courses: courses(short hand proper name)

});

export default rootReducer;
