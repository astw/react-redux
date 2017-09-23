export default function courseReducer(state =[], action) {   // default is empty array

  switch (action.type){
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.course)];    // ...spread operator, spread the array and define inline out.

    default:
      return state;
  }
}
