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
  BrandBar,
  defaultBrands,
  LargeHeader,
  MasonryImage,
  ExternalLink,
  Paragraph,
} from '../BasicComponents/index'

const SCREEN_PARTITION = 1100

const ModalImage = styled(Image)`
  max-width: 70%;
  max-height: 70vh;
`

const GridImage = styled(Image)`
  padding: 4px;
  width: 100%;
`

const MidScreenContainer = styled(BlockContainer)`
  @media screen
    and (max-width: ${SCREEN_PARTITION}px) {
      display: none;
  }
`

const SmallScreenContainer = styled(BlockContainer)`
  @media screen
    and (min-width: ${SCREEN_PARTITION + 1}px) {
      display: none;
    }
`

const DescriptionModal = (props) => {
  const {
    modalData,
    onClose,
  } = props

  const customBrands = defaultBrands.map((brand) => {
    if (brand.brand === 'etsy' && modalData.etsyUrl) {
      return {
        brand: 'etsy',
        colour: 'black',
        url: modalData.etsyUrl,
      }
    }

    return brand
  })

  const details = (spacing) => (
    <SpacedContainer spacing={spacing}>
      <LargeHeader margin='0em 0em 1em 0em'>{modalData.displayName}</LargeHeader>
      {modalData.description ? TextFormatter.paragraphizeText(modalData.description) : null}
      {
        modalData.youtube
        ? (
          <ExternalLink to={modalData.youtube}>
            <Paragraph colour='blue'>Check out how its made here!</Paragraph>
          </ExternalLink>
        ) : null
      }
      <BlockContainer>
        <Column align='flex-end' justify='flex-end'>
          <BrandBar spacing='10px 0px' brands={customBrands} />
          <Button onClick={onClose} padding='10px'>Close</Button>
        </Column>
      </BlockContainer>
    </SpacedContainer>
  )

  return (
    <Modal
      className='modal-content'
      overlayClassName='modal-overlay'
      isOpen={modalData.isOpen}
      contentLabel='Modal'
      onRequestClose={onClose}
    >
      <MidScreenContainer>
        <MultiColumnContainer align='flex-start'>
          <ModalImage src={modalData.src} />
          <BorderContainer>
            {details(`0px 0px 0px ${universal.space}`)}
          </BorderContainer>
        </MultiColumnContainer>
      </MidScreenContainer>
      <SmallScreenContainer>
        <Image width='100%' src={modalData.src} />
        {details()}
      </SmallScreenContainer>
    </Modal>
  )
}

// Given an array of images, layout and display them
class ImageGallery extends React.Component {
  render () {
    const {
      srcs,
      openID,
      onClose,
      rootID,
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
          youtube: src.youtube,
          etsyUrl: src.etsyUrl,
        }
      }

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
        <DescriptionModal modalData={modalData} onClose={onClose} />
      </BlockContainer>
    )
  }
}

export default ImageGallery
