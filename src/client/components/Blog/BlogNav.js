import React from 'react'

import universal from '../../styles/universal.json'
import blogData from '../../data/blogs.json'

import {
  Highlight,
  MainContainer,
  MultiColumnContainer,
  Column,
  LargeHeader,
} from '../BasicComponents/index'

const LeftColumn = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Column margin={`0px ${universal.space} 0px 0px`} size={3} {...rest}>
      {children}
    </Column>
  )
}

const RightColumn = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Column margin={`0px 0px 0px ${universal.space}`} size={1} {...rest} >
      {children}
    </Column>
  )
}

const BlogNav = (props) => {
  return (
    <MainContainer>
      <MultiColumnContainer>
        <LeftColumn>
          <LargeHeader title>Recent Blogs</LargeHeader>
          <Highlight to='/blog/blog_id1' first title='Alice Guo Art Launch' src='/blog/cat.jpg' content='See our amazing gallery by our most wonderful artist' />
        </LeftColumn>
        <RightColumn>
          <LargeHeader title>Popular</LargeHeader>
          <Highlight to='/blog/blog_id1' mini first title='Blog 2' src='/blog/cat.jpg' content='Blog Content 2' />
        </RightColumn>
      </MultiColumnContainer>
    </MainContainer>
  )
}

export default BlogNav
