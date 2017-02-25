import styled from 'styled-components'
import {
  BlockContainer,
} from '../BasicComponents/index'

const HeaderContainer = styled(BlockContainer)`
  height: 60px;
  padding: ${(props) => props.theme.universalPadding};
  background-color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
`

export default HeaderContainer
