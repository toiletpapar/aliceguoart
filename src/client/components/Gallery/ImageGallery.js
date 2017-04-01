import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'

import universal from '../../styles/universal.json'
import {TextFormatter} from '../../Utils/index'

import {
  BlockContainer,
  Image,
  Modal,
  Button,
  MultiColumnContainer,
  Column,
  BorderContainer,
  SpacedContainer,
  SocialMedia,
  LargeHeader,
} from '../BasicComponents/index'

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
}

const GridImage = styled(Image)`
  padding: 4px;

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
      width: 33.3333%;
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

const ModalImage = styled(Image)`
  max-width: 70%;
  max-height: 70vh;
`

// Given an array of images, layout and display them
class ImageGallery extends React.Component {
  render () {
    const {
      srcs,
      openID,
      onClose,
    } = this.props

    let modalData = {}

    const childElements = srcs.map((src, index) => {
      if (src.id === openID) {
        modalData = {
          isOpen: true,
          src: src.imgSrc,
          displayName: src.displayName,
          description: src.description,
        }
      }

      return (
        <Link to={`/gallery/${src.id}`} key={index}>
          <GridImage className='grid-item' src={src.imgSrc} />
        </Link>
      )
    })

    return (
      <Masonry options={masonryOptions}>
        <GridImage className='grid-sizer' />
        {childElements}
        <Modal
          className='modal-content'
          overlayClassName='modal-overlay'
          isOpen={modalData.isOpen}
          contentLabel='Modal'
          onRequestClose={onClose}
        >
          <MultiColumnContainer align='flex-start'>
            <ModalImage src={modalData.src} />
            <BorderContainer>
              <SpacedContainer spacing={`0px 0px 0px ${universal.space}`}>
                <LargeHeader margin='0em 0em 1em 0em'>{modalData.displayName}</LargeHeader>
                {modalData.description ? TextFormatter.paragraphizeText(modalData.description) : null}
                <BlockContainer>
                  <Column align='flex-end' justify='flex-end'>
                    <SocialMedia spacing='10px 0px' />
                    <Button onClick={onClose} padding='10px'>Close</Button>
                  </Column>
                </BlockContainer>
              </SpacedContainer>
            </BorderContainer>
          </MultiColumnContainer>
        </Modal>
      </Masonry>
    )
  }
}

export default ImageGallery
