import styled from 'styled-components'

const HighlightContainer = styled('div')`
  border: ${(props) => '1px solid ' + props.theme.gray};
  border-radius: 25px;
  width: 100%;
  margin: ${(props) => props.mini ? '20px 0px' : props.theme.universalSpacing}
  height: ${(props) => props.mini ? '200px' : '375px'};
  ${(props) => props.first ? 'margin-top: 0px;' : ''}
  display: flex;
  flex-direction: column;
`

export default HighlightContainer
