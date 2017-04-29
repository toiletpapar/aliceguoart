import styled from 'styled-components'
import { Styling } from '../../../Utils/index'

const InlineText = styled('span')`
  color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.black};
  overflow: hidden;
  white-space: ${(props) => props.whiteSpace || 'nowrap'};
  text-overflow: ${(props) => props.textOverflow || 'ellipsis'};
  font-family: ${(props) => props.theme.fontfamily};
  font-size: ${(props) => props.fontSize || props.theme.fontsize};
`

export default InlineText
