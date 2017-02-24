import styled from 'styled-components'

const Column = styled('div')`
  display: flex
  flex-direction: column
  justify-content: ${(props) => props.justify || 'flex-start'}
`

export default Column
