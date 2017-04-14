import React from 'react'
import styled from 'styled-components'

import {
  Link,
} from '../BasicComponents/index'

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
`

const StyledHeaderContainer = styled('div')`
  padding: ${(props) => props.margin ? props.margin : props.first ? '0px 20px 0px 0px' : '0px 20px'};
`

const HeaderLink = (props) => {
  const {
    first,
    margin,
    ...rest
  } = {...props}

  return (
    <StyledHeaderContainer first={first} margin={margin}>
      <StyledHeaderLink {...rest}>
        {props.children}
      </StyledHeaderLink>
    </StyledHeaderContainer>
  )
}

export default HeaderLink
