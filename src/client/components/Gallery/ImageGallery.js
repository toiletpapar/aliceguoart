import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

import {
  BlockContainer,
  Image,
  Modal,
  Button,
  RegularHeader,
} from '../BasicComponents/index'

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
}

const GridImage = styled(Image)`
  padding: 3px;

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

// Given an array of images, layout and display them
class ImageGallery extends React.Component {
  static modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  }

  static initialState = {
    modalOpen: false,
    description: null,
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

  setModal = (open, description) => () => {
    this.setState({
      modalOpen: open,
      description,
    })
  }

  render () {
    const childElements = this.props.srcs.map((src, index) => {
      return (
        <BlockContainer key={index}>
          <GridImage className='grid-item' src={src} onClick={this.setModal(true, src)} />
        </BlockContainer>
      )
    })

    return (
      <Masonry options={masonryOptions}>
        <GridImage className='grid-sizer' />
        {childElements}
        <Modal style={ImageGallery.modalStyle} isOpen={this.state.modalOpen} contentLabel='Modal' onRequestClose={this.setModal(false)}>
          <RegularHeader>{this.state.description}</RegularHeader>
          <Button onClick={this.setModal(false)}>Close</Button>
        </Modal>
      </Masonry>
    )
  }
}

export default ImageGallery
