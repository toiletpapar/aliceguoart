import styled from 'styled-components'

const Paragraph = styled('p')`
  font-family: ${(props) => props.theme.fontfamily};
  font-size: ${(props) => props.fontSize || props.theme.fontsize};
`

export default Paragraph
