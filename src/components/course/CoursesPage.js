import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      course:{
        title:""
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
     const course = this.state.course;
     course.title = event.target.value;
     this.setState({course:course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}> {course.title} </div>;
  }

  render(){
    // step 4
    //debugger;

    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.course.title}
        />

        <input type="submit"
               value="Save"
               onClick={this.onClickSave} />

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
