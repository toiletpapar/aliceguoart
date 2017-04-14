import React from 'react'
import styled from 'styled-components'
import { Styling } from '../../../Utils/index'

const StyledExternal = styled('a')`
  text-decoration: none;
  color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.black};
  margin: ${(props) => props.margin || '0px'};
`

const ExternalLink = (props) => {
  const {
    to,
    ...rest
  } = props

  return (
    <StyledExternal href={to} {...rest}>
      {props.children}
    </StyledExternal>
  )
}

export default ExternalLink
