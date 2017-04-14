import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import {
  BlockContainer,
} from '../index'

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  outline: none;
`

const Link = (props) => {
  const {
    to,
    className,
    children,
  } = props

  if (to) {
    return (
      <StyledLink to={to} className={className}>
        {children}
      </StyledLink>
    )
  } else {
    return (
      <BlockContainer className={className}>
        {children}
      </BlockContainer>
    )
  }
}

export default Link
