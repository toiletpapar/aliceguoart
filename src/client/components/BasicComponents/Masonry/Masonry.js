import React from 'react'
import ReactMasonry from 'react-masonry-component'

import {
  BlockContainer,
  Link,
} from '../index'

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
}

// Given an array of images, layout and display them
class Masonry extends React.Component {
  render () {
    const {
      children,
      links = [],
    } = this.props

    // Wrap children in a grid item for masonry
    const childElements = children.map((child, index) => {
      return (
        <Link to={links[index]} className='grid-item' key={index}>
          {child}
        </Link>
      )
    })

    return (
      <ReactMasonry options={masonryOptions}>
        <BlockContainer className='grid-sizer' />
        {childElements}
      </ReactMasonry>
    )
  }
}

export default Masonry
