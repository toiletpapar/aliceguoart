import styled from 'styled-components'

const MultiColumnContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.align || 'space-around'};
  align-items: ${(props) => props.justify || 'flex-start'};
  flex: ${(props) => props.size ? props.size : 0};
  padding: ${(props) => props.padding || '0px'};
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  flex: ${(props) => props.size || props.size === 0 ? props.size : 1};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  ${(props) => props.widthExpand ? 'width: 100%;' : ''}
`

export {
  MultiColumnContainer,
  Column,
}
