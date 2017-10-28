import React from 'react'
import { withRouter } from 'react-router-dom'

import ArtContent from './ArtContent'
import DescriptionModal from './DescriptionModal'
import artData from '../../data/art.json'
import cardData from '../../data/greetings.json'
import {
  BlockContainer,
} from '../BasicComponents/index'

import {
  ImageGallery,
} from './index'

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

const Gallery = (content) => withRouter((props) => {
  // Select from the data source based on content param
  const srcs = objMap[content].data.galleryData.map((galleryPhoto) => {
    return new ArtContent(galleryPhoto.id, galleryPhoto.imgSrc, { ...galleryPhoto })
  })
  const openID = props.match.params.imgID
  const rootID = objMap[content].mainURL
  let isOpen = false
  let modalData = {}

  if (openID) {
    const src = srcs.find((src) => src.id === openID)

    if (src) {
      isOpen = true
      modalData = {
        src: src.imgSrc,
        displayName: src.displayName,
        description: src.description,
        youtube: src.youtube,
        etsyUrl: src.etsyUrl,
      }
    }
  }

  const onClose = () => props.history.push(rootID)

  return (
    <BlockContainer>
      <ImageGallery srcs={srcs} rootID={rootID} />
      <DescriptionModal modalData={modalData} isOpen={isOpen} onClose={onClose} />
    </BlockContainer>
  )
})

export default Gallery
