import React from 'react'
import styled from 'styled-components'

import universal from '../../styles/universal.json'
import blogData from '../../data/blogs.json'
import popularBlogIDs from '../../data/blogsPopular.json'

import {
  Highlight,
  MainContainer,
  MultiColumnContainer,
  Column,
  LargeHeader,
  BlockContainer,
} from '../BasicComponents/index'

const LeftColumn = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Column align='stretch' size={1} {...rest}>
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
    <Column size={0} {...rest} >
      {children}
    </Column>
  )
}

const getPopularContent = () => {
  return popularBlogIDs.map((id) => {
    const data = blogData[id]

    return (
      <Highlight mini to={`/blog/${id}`} key={id} first title={data.title} src={data.imgSrc} />
    )
  })
}

const MidScreenContainer = styled(BlockContainer)`
  @media screen
    and (min-width: 681px) {
      padding-left: 80px;
  }

  @media screen
    and (max-width: 680px) {
      display: none;
  }
`

const SmallScreenContainer = styled(BlockContainer)`
  @media screen
    and (min-width: 681px) {
      display: none;
  }
`

const BlogNav = (props) => {
  return (
    <MainContainer>
      <MultiColumnContainer>
        <LeftColumn>
          <LargeHeader title>Recent Blogs</LargeHeader>
          {Object.keys(blogData).map((key) => {
            const data = blogData[key]
            return (
              <Highlight to={`/blog/${key}`} key={key} first title={data.title} src={data.imgSrc} content={data.snippetText} />
            )
          })}
        </LeftColumn>
        <RightColumn>
          <MidScreenContainer>
            <LargeHeader key='title' title>Popular</LargeHeader>
            {getPopularContent()}
          </MidScreenContainer>
        </RightColumn>
      </MultiColumnContainer>
      <SmallScreenContainer>
        <LargeHeader key='title' title>Popular</LargeHeader>
        <MultiColumnContainer>
          {getPopularContent()}
        </MultiColumnContainer>
      </SmallScreenContainer>
    </MainContainer>
  )
}

export default BlogNav
