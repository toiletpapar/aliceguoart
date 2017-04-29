import styled from 'styled-components'
import { Styling } from '../../../Utils/index'

const Paragraph = styled('p')`
  color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.black};
  font-family: ${(props) => props.theme.fontfamily};
  font-size: ${(props) => props.fontSize || props.theme.fontsize};
  text-align: justify;
  ${(props) => props.removeTopMargin ? 'margin-top: 0px;' : ''}
`

export default Paragraph
