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

  const onClose = () => props.history.push('/gallery')

  return (
    <ImageGallery srcs={srcs} openID={props.match.params.artID} onClose={onClose} />
  )
}

export default Gallery
