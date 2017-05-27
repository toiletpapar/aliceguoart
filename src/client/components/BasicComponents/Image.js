import React from 'react'
import styled from 'styled-components'

const StyledImage = styled('img')`
  width: ${(props) => props.width || 'auto'};
`

class Image extends React.Component {
  componentDidMount () {
    if (this.image.complete && this.props.onLoad) {
      this.props.onLoad()
    }
  }

  attachRef = (img) => {
    this.image = img
  }

  render () {
    return (
      <StyledImage innerRef={this.attachRef} {...this.props} />
    )
  }
}

export default Image
