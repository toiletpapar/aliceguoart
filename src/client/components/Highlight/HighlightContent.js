import styled from 'styled-components'

import {
  BlockContainer,
} from '../BasicComponents/index'

const HighlightContent = styled(BlockContainer)`
  padding: ${(props) => `5px ${props.theme.space}`}
`

export default HighlightContent
