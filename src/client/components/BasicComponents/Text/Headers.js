import styled from 'styled-components'
import { Styling } from '../../../Utils/index'

const BaseHeader = styled('h1')`
  margin: ${(props) => props.title ? '1em 0em' : props.margin ? props.margin : '0.5em 0em'};
  font-weight: ${(props) => props.thin ? props.theme.thinweight : props.theme.thickweight};
  font-family: ${(props) => props.theme.fontfamily};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.colour ? Styling.matchColour(props.theme, props.colour) : props.theme.black};
  display: ${(props) => props.display || 'block'};
  overflow: ${(props) => props.overflow || 'hidden'};
  white-space: ${(props) => props.whiteSpace || 'nowrap'};
  display: ${(props) => props.inline ? 'inline' : 'block'};
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
