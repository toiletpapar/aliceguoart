const boundNumber = (lowerBound, upperBound, number) => {
  if (number < lowerBound) {
    return lowerBound
  }

  if (number > upperBound) {
    return upperBound
  }

  return number
}

export {
  boundNumber,
}
