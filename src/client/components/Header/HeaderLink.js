import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
`

const StyledHeaderContainer = styled('div')`
  padding: ${(props) => props.first ? '0px 20px 0px 0px' : '0px 20px'};
`

const HeaderLink = (props) => {
  const {
    first,
    ...rest
  } = {...props}

  return (
    <StyledHeaderContainer first={first}>
      <StyledHeaderLink {...rest}>
        {props.children}
      </StyledHeaderLink>
    </StyledHeaderContainer>
  )
}

export default HeaderLink
