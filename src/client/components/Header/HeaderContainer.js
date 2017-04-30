import styled from 'styled-components'
import {
  BlockContainer,
} from '../BasicComponents/index'

const SCREEN_PARTITION = 1200

const HeaderContainer = styled(BlockContainer)`
  height: 9vh;

  background-color: ${(props) => props.theme.lightblack};
  display: flex;
  align-items: center;

  @media screen
    and (max-width: ${SCREEN_PARTITION}px) {
      padding: ${(props) => '0px 20px'};
  };

  @media screen
    and (min-width: ${SCREEN_PARTITION + 1}px) {
      padding: ${(props) => `0px ${props.theme.pad}`};
  };
`

export default HeaderContainer
