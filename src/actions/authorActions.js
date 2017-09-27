import * as types from './actionTypes';
import AuthorsApi from '../api/mockAuthorApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function  loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors:authors};     // return is an object, and it must have 'type' property
}

export function loadAuthors(){
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorsApi.getAllAuthors().then(authors =>{
      dispatch(loadAuthorsSuccess(authors));
    }).catch((err)=>{
      throw(err);
    });
  };
}
