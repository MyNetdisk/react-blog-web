import {
    ADD_NUMBER,
    SUB_NUMBER,
    SET_NAME,
    SET_ARTICLES,
    SET_CATEGORIES,
    SET_TAGS
  } from './constants.js'
  
  const addAction = (count) => ({
    type: ADD_NUMBER,
    num: count
  })
  
  const subAction = (count) => ({
    type: SUB_NUMBER,
    num: count
  })

  const setnameAction = (name) => ({
    type: SET_NAME,
    sitename: name
  })

  const setarticlesAction = (article) => ({
    type: SET_ARTICLES,
    articles: article
  })

  const setcategoriesAction = (categorie) => ({
    type: SET_CATEGORIES,
    categories: categorie
  })

  const settagsAction = (tag) => ({
    type: SET_TAGS,
    tags: tag
  })
  
  export {
    addAction,
    subAction,
    setnameAction,
    setarticlesAction,
    setcategoriesAction,
    settagsAction
  }