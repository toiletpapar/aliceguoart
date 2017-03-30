import React from 'react'
import styled from 'styled-components'

import {
  SmallHeader,
  RegularHeader,
  SocialMedia,
  Icon,
  BlockContainer,
  Column,
  MultiColumnContainer,
  DropdownMenu,
} from '../BasicComponents/index'

import {
  HeaderContainer,
  HeaderLink,
} from './index'

const FixedContainer = styled(BlockContainer)`
  width: ${(props) => props.theme.pad};
`

const SmallScreenContainer = styled(MultiColumnContainer)`
  @media screen
    and (min-width: 681px) {
      display: none;
    }

  flex: 1;
`

const MidScreenContainer = styled(MultiColumnContainer)`
  @media screen
    and (max-width: 680px) {
      display: none;
  }

  flex: 1;
`

const Header = (props) => {
  return (
    <HeaderContainer>
      {/* Improve logo design */}
      <FixedContainer>
        <RegularHeader colour='white'>Alice Guo Art</RegularHeader>
      </FixedContainer>
      <MidScreenContainer justify='center'>
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
          <SocialMedia spacing='0px' colour='white' />
        </Column>
      </MidScreenContainer>
      <SmallScreenContainer align='flex-end'>
        <DropdownMenu />
      </SmallScreenContainer>
    </HeaderContainer>
  )
}

export default Header
