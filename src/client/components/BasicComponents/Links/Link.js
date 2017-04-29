import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import {
  BlockContainer,
} from '../index'

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.black}
`

const Link = (props) => {
  const {
    to,
    className,
    children,
    ...rest
  } = props

  if (to) {
    return (
      <StyledLink to={to} className={className} {...rest}>
        {children}
      </StyledLink>
    )
  } else {
    return (
      <BlockContainer className={className} {...rest}>
        {children}
      </BlockContainer>
    )
  }
}

export default Link
