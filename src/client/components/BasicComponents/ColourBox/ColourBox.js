import React from 'react'
import styled from 'styled-components'

import {
  InlineContainer,
  Icon,
} from '../index'

const StyledBox = styled('div')`
  background-color: ${(props) => props.theme.errorred};
  padding: 10px;
  display: ${(props) => props.hidden ? 'hidden' : 'block'}
`

const ColourBox = (props) => {
  return (
    <StyledBox hidden={props.hidden} className={props.className}>
      <Icon className='fa fa-exclamation-triangle' aria-hidden='true' />
      <InlineContainer>{props.children}</InlineContainer>
    </StyledBox>
  )
}

export default ColourBox
