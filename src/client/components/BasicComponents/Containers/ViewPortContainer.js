import styled from 'styled-components'

import { Styling } from '../../../Utils/index'

const ViewPortContainer = styled('div')`
  height: ${(props) => props.height || props.theme.viewHeight}
  background-color: ${(props) => Styling.matchColour(props.theme, props.colour) || props.theme.lightgray}
`

export default ViewPortContainer
