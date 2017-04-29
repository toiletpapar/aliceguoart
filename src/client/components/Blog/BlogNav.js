import React from 'react'

import universal from '../../styles/universal.json'
import blogData from '../../data/blogs.json'
import popularBlogIDs from '../../data/blogsPopular.json'

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
          {Object.keys(blogData).map((key) => {
            const data = blogData[key]
            return (
              <Highlight to={`/blog/${key}`} first title={data.title} src={data.imgSrc} content={data.snippetText} />
            )
          })}
        </LeftColumn>
        <RightColumn>
          <LargeHeader title>Popular</LargeHeader>
          {
            popularBlogIDs.map((id) => {
              const data = blogData[id]

              return (
                <Highlight mini to={`/blog/${id}`} first title={data.title} src={data.imgSrc} />
              )
            })
          }
        </RightColumn>
      </MultiColumnContainer>
    </MainContainer>
  )
}

export default BlogNav
