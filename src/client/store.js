import { createStore, combineReducers } from 'redux'
// import { createEpicMiddleware, combineEpics } from 'redux-observable'

import Gallery from './reducers/galleryReducer'

// import UserEpic from './epics/UserEpic'

// const epic = combineEpics(
//   UserEpic
// )

const reducer = combineReducers({
  Gallery,
})

const makeStore = (preloadedState) => preloadedState
  ? createStore(
    reducer,
    preloadedState,
    // applyMiddleware(
    //   createEpicMiddleware(epic)
    // )
  )
  : createStore(
    reducer,
    // applyMiddleware(
    //   createEpicMiddleware(epic)
    // )
  )

export default makeStore
