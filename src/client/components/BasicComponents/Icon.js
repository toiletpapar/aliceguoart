import styled from 'styled-components'

import { Styling } from '../../Utils/index'

const Icon = styled('i')`
  margin: 0px 5px
  color: ${(props) => Styling.matchColour(props.theme, props.colour) || props.theme.black}
`

export default Icon
