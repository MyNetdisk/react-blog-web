import {
    ADD_NUMBER,
    SUB_NUMBER,
    SET_NAME,
    SET_ARTICLES,
    SET_CATEGORIES,
    SET_TAGS
  } from './constants.js';
  
  const initialState = {
    counter: 0,
    sitename: 'MyNetdisk',
    articles: 0,
    categories: 0,
    tags: 0
  }
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case ADD_NUMBER:
        return {...state, counter: state.counter + action.num};
      case SUB_NUMBER:
        return {...state, counter: state.counter - action.num};
      case SET_NAME:
        return {...state, sitename: action.sitename};
      case SET_ARTICLES:
        return {...state, articles: action.articles};
      case SET_CATEGORIES:
        return {...state, categories: action.categories};
      case SET_TAGS:
        return {...state, tags: action.tags};
      default:
        return state;
    } 
  }
  
  export default reducer;