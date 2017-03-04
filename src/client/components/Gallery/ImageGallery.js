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
  gutter: '.gutter-sizer',
}

const GutterSize = styled(BlockContainer)`
  width: 0.5%;
`

const GridImage = styled(Image)`
  margin: 4px 0px;

  /* Tiny Screens */
  @media screen
    and (max-width: 550px) {
      width: 99.5%;
  };

  /* Min sized windows */
  @media screen
    and (min-width: 551px)
    and (max-width: 799px) {
      width: 49.5%;
  };

  @media screen
    and (min-width: 800px)
    and (max-width: 1199px) {
      width: 32.8%;
  };

  /* Laptops */
  @media screen
    and (min-width: 1200px)
    and (max-width: 1600px) {
      width: 24.5%;
  };

  /* Large Screens */
  @media screen
    and (min-width: 1601px) {
      width: 19.5%;
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
        <GutterSize className='gutter-sizer' />
        <GridImage className='grid-sizer' />
        {childElements}
      </Masonry>
    )
  }
}

export default ImageGallery
