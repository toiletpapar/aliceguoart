const matchColour = (theme, colour) => {
  colour = colour ? colour.trim().toLowerCase() : undefined
  const hexColour = theme[colour]

  return hexColour
}

export {
  matchColour,
}
