import styled from 'styled-components'

import {
  Image,
} from '../BasicComponents/index'

const SlideImage = styled(Image)`
  height: ${(props) => props.height || props.theme.viewHeight};
  width: 100%;
  margin: 0 auto;
`

export default SlideImage
