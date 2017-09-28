import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock'; // node mock,  mock http request calls;
import configureMockStore from 'redux-mock-store';

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

//test thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', ()=>{
  afterEach(()=>{
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done)=>{
    // Here's an example call to nock.
    // nock('http://example.com')
    //     .get('/course')
    //     .reply(200, {course:[{id:1, firstName:'Cory', lastName:'House}] }));

    const expectedActions = [
      {types: types.BEGIN_AJAX_CALL},
      {types: types.LOAD_COURSES_SUCCESS, body:{courses:[{id:'clean-code', title:'Clean Code'}]}}
    ];

    const store = mockStore({courses:[]}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(()=>{
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
