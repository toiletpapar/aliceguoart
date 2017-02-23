const galleryState = {
  something: 'value',
}

// Keys must match the names in combineReducers
const combinedInitialState = {
  Gallery: galleryState,
}

const compileInitialState = (apiResults) => {
  return {
    ...combinedInitialState,
  }
}

export {
  galleryState,
  compileInitialState,
}
