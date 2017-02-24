import styled from 'styled-components'

const SpacedContainer = styled('div')`
  margin: ${(props) => props.spacing || props.theme.universalSpacing}
`

export default SpacedContainer
