import styled from 'styled-components'
import {
  BlockContainer,
} from '../BasicComponents/index'

const HeaderContainer = styled(BlockContainer)`
  height: 9vh;
  padding: ${(props) => `0px ${props.theme.pad} 0px 0px`};
  background-color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
`

export default HeaderContainer
