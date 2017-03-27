import React from 'react'
import styled from 'styled-components'

import {
  SmallHeader,
  RegularHeader,
  SocialMedia,
  Icon,
  BlockContainer,
  Column,
} from '../BasicComponents/index'

import {
  HeaderContainer,
  HeaderLink,
} from './index'

const FixedContainer = styled(BlockContainer)`
  width: ${(props) => props.theme.pad};
  padding-left: 20px;
`

const Header = (props) => {
  return (
    <HeaderContainer>
      {/* Improve logo design */}
      <FixedContainer>
        <RegularHeader colour='white'>Alice Guo Art</RegularHeader>
      </FixedContainer>
      <HeaderLink first to='/home'>
        <Icon margin='0px 8px 0px 0px' className='fa fa-home' colour='white' />
        <SmallHeader inline colour='white'>Home</SmallHeader>
      </HeaderLink>
      <HeaderLink to='/gallery'>
        <Icon className='fa fa-paint-brush' colour='white' />
        <SmallHeader inline colour='white'>Gallery</SmallHeader>
      </HeaderLink>
      <HeaderLink to='/about'>
        <Icon className='fa fa-child' colour='white' />
        <SmallHeader inline colour='white'>About Us</SmallHeader>
      </HeaderLink>
      <Column align='flex-end'>
        <SocialMedia colour='white' />
      </Column>
    </HeaderContainer>
  )
}

export default Header
