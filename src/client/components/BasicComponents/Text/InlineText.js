import styled from 'styled-components'
import { Styling } from '../../../Utils/index'

const InlineText = styled('span')`
  color: ${(props) => Styling.matchColour(props.theme, props.colour)};
  overflow: hidden;
  white-space: ${(props) => props.whiteSpace || 'nowrap'};
  text-overflow: ${(props) => props.textOverflow || 'ellipsis'};
`

export default InlineText
