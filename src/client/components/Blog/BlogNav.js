import React from 'react'

import universal from '../../styles/universal.json'
import blogData from '../../data/blogs.json'

import {
  Highlight,
  MainContainer,
  MultiColumnContainer,
  Column,
} from '../BasicComponents/index'

const LeftColumn = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Column margin={`0px ${universal.space} 0px 0px`} {...rest}>
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
    <Column margin={`0px 0px 0px ${universal.space}`} {...rest} >
      {children}
    </Column>
  )
}

const BlogNav = (props) => {
  return (
    <MainContainer>
      <MultiColumnContainer>
        <LeftColumn>
          <Highlight title='Alice Guo Art Launch' src='/blog/cat.jpg' content='See our amazing gallery by our most wonderful artist' />
        </LeftColumn>
        <RightColumn>
          <Highlight title='Blog 2' src='' content='Blog Content 2' />
        </RightColumn>
      </MultiColumnContainer>
      <MultiColumnContainer>
        <Highlight title='Blog 3' src='' content='Blog Content 3' />
        <Highlight title='Blog 4' src='' content='Blog Content 4' />
      </MultiColumnContainer>
    </MainContainer>
  )
}

export default BlogNav
