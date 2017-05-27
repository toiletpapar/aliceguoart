import React from 'react'
import ReactMasonry from 'react-masonry-component'

import {
  BlockContainer,
  Link,
} from '../index'

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
}

// Given an array of images (see Image class), layout and display them
// It can be any Image class that implements onLoad, onError and calls onLoad if the image is completed (for isomorphic apps)
class MasonryImage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loadToIndex: props.bulkLoad - 1,
    }
  }

  numLoaded = 0

  componentWillReceiveProps (nextProps) {
    if (this.props.srcs !== nextProps.srcs) {
      this.setState({
        loadToIndex: nextProps.bulkLoad - 1,
      })
    }
  }

  loadNextSet = () => {
    this.setState({
      loadToIndex: this.state.loadToIndex + this.props.bulkLoad,
    })
  }

  updateCompleted = () => {
    this.numLoaded++

    if (this.numLoaded === this.props.bulkLoad) {
      this.numLoaded = 0
      this.loadNextSet()
    }
  }

  render () {
    const {
      children,
      links = [],
    } = this.props

    // Wrap children in a grid item for masonry
    const childElements = children.reduce((acc, child, index) => {
      if (index > this.state.loadToIndex) {
        return acc
      }

      const props = {
        onLoad: this.updateCompleted,
        onError: this.updateCompleted,
      }

      const clone = React.cloneElement(child, props)
      const element = (
        <Link to={links[index]} className='grid-item' key={index}>
          {clone}
        </Link>
      )

      return [
        ...acc,
        element,
      ]
    }, [])

    return (
      <ReactMasonry options={masonryOptions}>
        <BlockContainer className='grid-sizer' />
        {childElements}
      </ReactMasonry>
    )
  }
}

export default MasonryImage
