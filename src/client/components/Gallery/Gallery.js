import React from 'react'

import {
  BlockContainer,
} from '../BasicComponents/index'

import {
  ImageGallery,
} from './index'

const Gallery = (props) => {
  const srcs = [
    '/gallery/cat.jpg',
    '/gallery/puppy.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy2.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy2.jpg',
    '/gallery/cat.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy2.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy.jpg',
    '/gallery/cat.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy.jpg',
    '/gallery/cat.jpg',
    '/gallery/puppy2.jpg',
    '/gallery/cat.jpg',
  ]

  return (
    <ImageGallery srcs={srcs} />
  )
}

export default Gallery
