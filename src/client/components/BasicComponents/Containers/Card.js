import styled from 'styled-components'

const Card = styled('div')`
  border: ${(props) => `1px solid ${props.theme.lightergray}`};
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  padding: ${(props) => props.theme.space};
`

export default Card
