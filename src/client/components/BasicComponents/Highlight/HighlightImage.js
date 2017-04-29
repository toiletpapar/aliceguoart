import styled from 'styled-components'

const HighlightImage = styled('img')`
  max-height: 100px;
  margin: ${(props) => props.center ? 'auto' : '0px'};
  border-radius: ${(props) => props.roundCorners ? '25px 25px 0px 0px' : '0px'};
`

export default HighlightImage
