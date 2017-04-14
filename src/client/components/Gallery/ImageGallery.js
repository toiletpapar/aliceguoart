import React from 'react'
import styled from 'styled-components'

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
  Masonry,
} from '../BasicComponents/index'

const ModalImage = styled(Image)`
  max-width: 70%;
  max-height: 70vh;
`

const GridImage = styled(Image)`
  padding: 4px;
  width: 100%;
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
    let links = []

    const childElements = srcs.map((src, index) => {
      if (src.id === openID) {
        modalData = {
          isOpen: true,
          src: src.imgSrc,
          displayName: src.displayName,
          description: src.description,
        }
      }

      links = [...links, `/gallery/${src.id}`]

      return (
        <GridImage src={src.imgSrc} key={index} />
      )
    })

    return (
      <BlockContainer>
        <Masonry links={links}>
          {childElements}
        </Masonry>
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
      </BlockContainer>
    )
  }
}

export default ImageGallery
