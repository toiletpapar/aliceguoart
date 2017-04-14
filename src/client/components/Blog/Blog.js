import React from 'react'
import { withRouter } from 'react-router-dom'

import blogData from '../../data/blogs.json'

import {
  BlogPost,
} from '../BasicComponents/index'

const Blog = (props) => {
  const blogID = props.match.params.blogID

  return (
    <BlogPost {...blogData[blogID]} />
  )
}

export default withRouter(Blog)
