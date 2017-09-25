import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from'react-router';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index){
    return <div key={index}> {course.title} </div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    // step 4
    //debugger;
    const {courses} = this.props;

    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
         <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

//ownProps: refer to component's own props
function mapStateToProps(state, ownProps) {
  //step 3
  //debugger;
  return {
    courses:state.courses   //data in state.   courses is defined in reducers
  };
}

function  maptDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions:bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, maptDispatchToProps)(CoursesPage);
