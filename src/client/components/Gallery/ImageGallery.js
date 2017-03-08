import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

import {
  BlockContainer,
  Image,
} from '../BasicComponents/index'

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
}

const GridImage = styled(Image)`
  padding: 3px;

  /* Tiny Screens */
  @media screen
    and (max-width: 550px) {
      width: 100%;
  };

  /* Min sized windows */
  @media screen
    and (min-width: 551px)
    and (max-width: 799px) {
      width: 50%;
  };

  @media screen
    and (min-width: 800px)
    and (max-width: 1199px) {
      width: 33%;
  };

  /* Laptops */
  @media screen
    and (min-width: 1200px)
    and (max-width: 1600px) {
      width: 25%;
  };

  /* Large Screens */
  @media screen
    and (min-width: 1601px) {
      width: 20%;
  };
`

// Given an array of images, layout and display them
class ImageGallery extends React.Component {
  render () {
    const childElements = this.props.srcs.map((src, index) => {
      return (
        <BlockContainer key={index}>
          <GridImage className='grid-item' src={src} />
        </BlockContainer>
      )
    })

    return (
      <Masonry options={masonryOptions}>
        <GridImage className='grid-sizer' />
        {childElements}
      </Masonry>
    )
  }
}

export default ImageGallery
