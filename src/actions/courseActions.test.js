import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// test a action
describe('Course Actions', ()=>{
  it('should create a CREATE_COURSE_SUCCESS action', ()=>{

    // arrange
    const course = {id:'clean-code', title:'Clean Code'};
    const expectedActions = {
      type:types.CREATE_COURSE_SUCCESS,
      course:course
    };

    //act
    const action = courseActions.createCourseSuccess(course);

    //assert
    expect(action).toEqual(expectedActions);
  });
});
