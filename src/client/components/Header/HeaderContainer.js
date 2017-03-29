import styled from 'styled-components'
import {
  BlockContainer,
} from '../BasicComponents/index'

const HeaderContainer = styled(BlockContainer)`
  height: 9vh;

  background-color: ${(props) => props.theme.lightblack};
  display: flex;
  align-items: center;

  @media screen
    and (max-width: 1199px) {
      padding: ${(props) => `0px 20px 0px 20px`};
  };

  @media screen
    and (min-width: 1200px) {
      padding: ${(props) => `0px ${props.theme.pad} 0px 20px`};
  };
`

export default HeaderContainer
