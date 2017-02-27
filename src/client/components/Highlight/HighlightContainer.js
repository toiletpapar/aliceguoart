import styled from 'styled-components'

import {
  BlockContainer,
} from '../BasicComponents/index'

const HighlightContainer = styled(BlockContainer)`
  border: ${(props) => '1px solid ' + props.theme.gray};
  width: 100%;
  margin: ${(props) => props.theme.universalSpacing}
  height: 350px;
  display: flex;
  flex-direction: column;
`

export default HighlightContainer
