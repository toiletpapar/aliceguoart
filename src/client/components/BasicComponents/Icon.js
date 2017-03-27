import React from 'react'
import styled from 'styled-components'
import { Styling } from '../../Utils/index'

const Icon = styled('i')`
  margin: ${(props) => props.margin || '0px 8px'};
  color: ${(props) => Styling.matchColour(props.theme, props.colour)};
  font-size: ${(props) => props.size || '16px'};
`

const StyledIcon = styled('a')`
  text-decoration: none;
  color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.black};
  margin: ${(props) => props.margin || '0px 8px'}
`

const IconAnchor = (props) => {
  const {
    to,
    icon,
    ...rest
  } = {...props}

  return (
    <StyledIcon href={to} {...rest} >
      <Icon className={icon} margin='0px' />
    </StyledIcon>
  )
}

export {
  Icon,
  IconAnchor,
}
