import styled from 'styled-components'

import {
  Image,
} from '../BasicComponents/index'

const SlideImage = styled(Image)`
  height: ${(props) => props.theme.viewHeight};
  margin: 0 auto;
`

export default SlideImage
