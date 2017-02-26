import styled from 'styled-components'

import { Styling } from '../../Utils/index'

const Paragraph = styled('p')`
  font-size: 18px;
  color: ${(props) => Styling.matchColour(props.theme, props.colour) || props.theme.darkgray};
  text-align: justify;
`
export default Paragraph
