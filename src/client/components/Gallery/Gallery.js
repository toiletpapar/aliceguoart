import React from 'react'

import ArtContent from './ArtContent'

import artData from '../../data/art.json'

import {
  ImageGallery,
} from './index'

const Gallery = (props) => {
  const srcs = artData.galleryData.map((galleryPhoto) => {
    return new ArtContent(galleryPhoto.id, galleryPhoto.imgSrc, galleryPhoto.displayName, galleryPhoto.description)
  })

  console.log(props)

  return (
    <ImageGallery srcs={srcs} open={props.match.params.artID} />
  )
}

export default Gallery
