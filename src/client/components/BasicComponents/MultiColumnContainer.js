import styled from 'styled-components'

const MultiColumnContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  flex: ${(props) => props.size || 1};
  margin: ${(props) => props.theme.space};
`

export {
  MultiColumnContainer,
  Column,
}
