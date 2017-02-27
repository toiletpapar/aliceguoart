import React from 'react'
import styled from 'styled-components'

const StyledButton = styled('button')`
  background-color: ${(props) => props.theme.green};
  border: none;
  color: ${(props) => props.theme.white};
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.activegreen};
  }
`

const Button = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
