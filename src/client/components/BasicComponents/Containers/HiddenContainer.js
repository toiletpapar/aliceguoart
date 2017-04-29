import styled from 'styled-components'

const HiddenContainer = styled('div')`
  ${(props) => props.hide ? 'display: none;' : ''}
`

export default HiddenContainer
