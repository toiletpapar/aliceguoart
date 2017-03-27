import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

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
  /*padding: 3px;*/

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
      width: 33%;
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
  static modalStyle = {
    content: {
      padding: `${universal.space}`,
      left: `${universal.pad}`,
      right: `${universal.pad}`,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  }

  static initialState = {
    modalOpen: false,
    artContent: null,
  }

  constructor (props) {
    super(props)

    this.state = ImageGallery.initialState
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.srcs !== nextProps.srcs) {
      this.setState(ImageGallery.initialState)
    }
  }

  setModal = (open, src, description, displayName) => () => {
    this.setState({
      modalOpen: open,
      src,
      description,
      displayName,
    })
  }

  render () {
    const childElements = this.props.srcs.map((src, index) => {
      return (
        <BlockContainer key={index}>
          <GridImage className='grid-item' src={src.imgSrc} onClick={this.setModal(true, src.imgSrc, src.description, src.displayName)} />
        </BlockContainer>
      )
    })

    return (
      <Masonry options={masonryOptions}>
        <GridImage className='grid-sizer' />
        {childElements}
        <Modal style={ImageGallery.modalStyle} isOpen={this.state.modalOpen} contentLabel='Modal' onRequestClose={this.setModal(false)}>
          <MultiColumnContainer align='flex-start'>
            <ModalImage src={this.state.src} />
            <BorderContainer>
              <SpacedContainer spacing={`0px 0px 0px ${universal.space}`}>
                <LargeHeader margin='0em 0em 1em 0em'>{this.state.displayName}</LargeHeader>
                {this.state.description ? TextFormatter.paragraphizeText(this.state.description) : null}
                <BlockContainer>
                  <Column align='flex-end' justify='flex-end'>
                    <SocialMedia spacing='10px 0px' />
                    <Button onClick={this.setModal(false)} padding='10px'>Close</Button>
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
