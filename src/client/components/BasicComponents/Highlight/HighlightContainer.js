import styled from 'styled-components'

const HighlightContainer = styled('div')`
  border: ${(props) => '1px solid ' + props.theme.gray};
  border-radius: 25px;
  width: 100%;
  margin: ${(props) => props.theme.universalSpacing}
  height: 375px;
  display: flex;
  flex-direction: column;
`

export default HighlightContainer
