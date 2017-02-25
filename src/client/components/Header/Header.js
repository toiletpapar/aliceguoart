import React from 'react'

import {
  SmallHeader,
  Icon,
} from '../BasicComponents/index'

import {
  HeaderContainer,
  HeaderLink,
} from './index'

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderLink to='/home'>
        <Icon className='fa fa-home' colour='white' />
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
    </HeaderContainer>
  )
}

export default Header
