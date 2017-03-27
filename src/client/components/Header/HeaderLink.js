import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderLink = styled(Link)`
  padding: ${(props) => props.first ? '0px 20px 0px 0px' : '0px 20px'};
  text-decoration: none;
`

export default HeaderLink
