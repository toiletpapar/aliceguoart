import React from 'react'
import styled from 'styled-components'
import { Styling } from '../../Utils/index'

const Icon = styled('i')`
  margin: 0px 8px;
  color: ${(props) => Styling.matchColour(props.theme, props.colour)};
  font-size: ${(props) => props.size || '16px'};
`

const StyledIcon = styled('a')`
  text-decoration: none;
  color: ${(props) => props.theme.black};
`

const IconAnchor = (props) => {
  return (
    <StyledIcon href={props.to}>
      <Icon className={props.icon} />
    </StyledIcon>
  )
}

export {
  Icon,
  IconAnchor,
}
