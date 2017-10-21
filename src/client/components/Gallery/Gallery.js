import React from 'react'
import { withRouter } from 'react-router-dom'

import ArtContent from './ArtContent'

import artData from '../../data/art.json'
import cardData from '../../data/greetings.json'

import {
  ImageGallery,
} from './index'

const Gallery = (content) => withRouter((props) => {
  // Select from the data source based on content param
  const objMap = {
    art: {
      data: artData,
      mainURL: '/gallery',
    },
    card: {
      data: cardData,
      mainURL: '/greetings',
    },
  }

  const srcs = objMap[content].data.galleryData.map((galleryPhoto) => {
    return new ArtContent(galleryPhoto.id, galleryPhoto.imgSrc, { ...galleryPhoto })
  })

  const onClose = () => props.history.push(objMap[content].mainURL)

  return (
    <ImageGallery srcs={srcs} rootID={objMap[content].mainURL} openID={props.match.params.imgID} onClose={onClose} />
  )
})

export default Gallery
