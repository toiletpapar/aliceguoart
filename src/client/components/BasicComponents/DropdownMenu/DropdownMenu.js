import React from 'react'

import {slide as Menu} from 'react-burger-menu'

import {
  Icon,
  SmallHeader,
} from '../index'

import { HeaderLink } from '../../Header/index'

const DropdownMenu = (props) => {
  return (
    <Menu radiumConfig={{ userAgent: 'all' }}>
      <div>
        <HeaderLink to='/home'>
          <Icon margin='0px 8px 0px 0px' className='fa fa-home' colour='white' />
          <SmallHeader inline colour='white'>Home</SmallHeader>
        </HeaderLink>
      </div>
      <div>
        <HeaderLink to='/gallery'>
          <Icon className='fa fa-paint-brush' colour='white' />
          <SmallHeader inline colour='white'>Gallery</SmallHeader>
        </HeaderLink>
      </div>
      <div>
        <HeaderLink to='/about'>
          <Icon className='fa fa-child' colour='white' />
          <SmallHeader inline colour='white'>About Us</SmallHeader>
        </HeaderLink>
      </div>
    </Menu>
  )
}

export default DropdownMenu
