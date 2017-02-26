import styled from 'styled-components'

import { Styling } from '../../Utils/index'

const BaseHeader = styled('h1')`
  margin: ${(props) => props.title ? '1em 0em' : '0.5em 0em'};
  font-weight: ${(props) => props.thin ? props.theme.thinweight : props.theme.thickweight};
  font-family: ${(props) => props.theme.fontfamily};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => Styling.matchColour(props.theme, props.colour) || props.theme.darkgray};
  display: ${(props) => props.inline ? 'inline' : 'block'}
`

const LargeHeader = styled(BaseHeader)`
  font-size: 26px;
`

const RegularHeader = styled(BaseHeader)`
  font-size: 21px;
`

const SmallHeader = styled(BaseHeader)`
  font-size: 16px;
`

export {
  SmallHeader,
  RegularHeader,
  LargeHeader,
}