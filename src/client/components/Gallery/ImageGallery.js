import React from 'react'
import styled from 'styled-components'

import {
  BlockContainer,
  Image,
  MasonryImage,
} from '../BasicComponents/index'

const GridImage = styled(Image)`
  padding: 4px;
  width: 100%;
`

// Given an array of images, layout and display them
class ImageGallery extends React.Component {
  render () {
    const {
      srcs,
      rootID,
    } = this.props

    let links = []

    const childElements = srcs.map((src, index) => {
      links = [...links, `${rootID}/${src.id}`]

      return (
        <GridImage src={src.imgSrc} key={index} />
      )
    })

    return (
      <BlockContainer>
        <MasonryImage links={links} bulkLoad={1}>
          {childElements}
        </MasonryImage>
      </BlockContainer>
    )
  }
}

export default ImageGallery
