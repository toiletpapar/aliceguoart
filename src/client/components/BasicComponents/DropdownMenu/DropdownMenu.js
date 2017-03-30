import React from 'react'

import {slide as Menu} from 'react-burger-menu'

import {
  Icon,
  SmallHeader,
} from '../index'

const DropdownMenu = (props) => {
  return (
    <Menu right>
      <a href='/home'>
        <Icon margin='0px 8px 0px 0px' className='fa fa-home' colour='white' />
        <SmallHeader inline colour='white'>Home</SmallHeader>
      </a>
      <a href='/gallery'>
        <Icon className='fa fa-paint-brush' colour='white' />
        <SmallHeader inline colour='white'>Gallery</SmallHeader>
      </a>
      <a href='/about'>
        <Icon className='fa fa-child' colour='white' />
        <SmallHeader inline colour='white'>About Us</SmallHeader>
      </a>
    </Menu>
  )
}

export default DropdownMenu
