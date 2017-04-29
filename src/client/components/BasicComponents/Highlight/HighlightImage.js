import styled from 'styled-components'

const HighlightImage = styled('img')`
  height: 50%;
   border-radius: ${(props) => props.roundCorners ? '25px 25px 0px 0px' : '0px'};
`

export default HighlightImage
