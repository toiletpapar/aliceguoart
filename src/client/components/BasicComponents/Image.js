import styled from 'styled-components'

const Image = styled('img')`
  width: ${(props) => props.width || 'auto'};
`

export default Image
