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
  SpacedContainer,
} from '../BasicComponents/index'

import {
  HeaderContainer,
  HeaderLink,
} from './index'

const FixedContainer = styled(BlockContainer)`
  width: ${(props) => props.theme.pad};
`

const MidScreenContainer = styled(MultiColumnContainer)`
  @media screen
    and (max-width: 790px) {
      display: none;
  }

  flex: 1;
`

const SmallScreenContainer = styled(MultiColumnContainer)`
  @media screen
    and (min-width: 791px) {
      display: none;
    }

  flex: 1;
`

const DropdownLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  return (
    <HeaderLink margin='0px' to={to} {...rest}>
      {children}
    </HeaderLink>
  )
}

const DropdownIcon = (props) => {
  const {
    className,
    ...rest
  } = props

  return (
    <Icon className={className} colour='white' size='24px' {...rest} />
  )
}

const DropdownHeader = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <SmallHeader inline colour='white' size='24px' margin='0px' {...rest}>{children}</SmallHeader>
  )
}

const DropdownMenuItem = (props) => {
  const {
    icon,
    text,
    ...rest
  } = props

  return (
    <SpacedContainer spacing='10px 0px'>
      <MultiColumnContainer align='flex-start' justify='flex-end' {...rest}>
        <Column>
          <DropdownIcon className={icon} />
        </Column>
        <Column size={4}>
          <DropdownHeader>{text}</DropdownHeader>
        </Column>
      </MultiColumnContainer>
    </SpacedContainer>
  )
}

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
        <HeaderLink to='/blog'>
          <Icon className='fa fa-rss' colour='white' />
          <SmallHeader inline colour='white'>Blog</SmallHeader>
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
        <SocialMedia spacing='0px 20px 0px 0px' colour='white' />
        <DropdownMenu>
          <DropdownLink to='/home'>
            <DropdownMenuItem text='Home' icon='fa fa-home' />
          </DropdownLink>
          <DropdownLink to='/gallery'>
            <DropdownMenuItem text='Gallery' icon='fa fa-paint-brush' />
          </DropdownLink>
          <DropdownLink to='/blog'>
            <DropdownMenuItem text='Blog' icon='fa fa-rss' />
          </DropdownLink>
          <DropdownLink to='/about'>
            <DropdownMenuItem text='About Us' icon='fa fa-child' />
          </DropdownLink>
        </DropdownMenu>
      </SmallScreenContainer>
    </HeaderContainer>
  )
}

export default Header
