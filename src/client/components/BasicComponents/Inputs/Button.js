import React from 'react'
import styled from 'styled-components'

import {Styling} from '../../../Utils/index'

const StyledButton = styled('button')`
  background-color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.green};
  border: none;
  color: ${(props) => props.textColour ? Styling.matchColour(props.theme, props.textColour) : props.theme.white};
  text-decoration: none;
  padding: ${(props) => props.padding || '0px'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'center'};

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.activeColour ? Styling.matchColour(props.theme, props.activeColour) : props.theme.activegreen};
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
