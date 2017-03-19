import React from 'react'

import {
  ImageGallery,
} from './index'

const Gallery = (props) => {
  const srcs = [
    '/gallery/Afternoon.png',
    '/gallery/And so We Wander.png',
    '/gallery/Backpacking.png',
    '/gallery/Dreamer.png',
    '/gallery/Hello.png',
    '/gallery/Owl.png',
    '/gallery/Snuggling.png',
    '/gallery/Watching the Wave.png',
    '/gallery/Fishing.jpg',
    '/gallery/Meung.jpg',
    '/gallery/Reflecting on the Blue.png',
  ]

  return (
    <ImageGallery srcs={srcs} />
  )
}

export default Gallery
