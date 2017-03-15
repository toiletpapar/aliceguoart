import styled from 'styled-components'
import { Styling } from '../../Utils/index'

const Icon = styled('i')`
  margin: 0px 8px;
  color: ${(props) => Styling.matchColour(props.theme, props.colour)};
  font-size: ${(props) => props.size || '16px'};
`

export default Icon
