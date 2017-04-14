import React from 'react'

import blogData from '../../data/blogs.json'

import {
  Highlight,
  MainContainer,
} from '../BasicComponents/index'

const BlogNav = (props) => {
  return (
    <MainContainer>
      <Highlight title='Blog 1' src='' content='Blog Content 1' />
      <Highlight title='Blog 2' src='' content='Blog Content 2' />
      <Highlight title='Blog 3' src='' content='Blog Content 3' />
      <Highlight title='Blog 4' src='' content='Blog Content 4' />
    </MainContainer>
  )
}

export default BlogNav
