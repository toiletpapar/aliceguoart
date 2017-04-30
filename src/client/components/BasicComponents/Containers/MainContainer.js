import styled from 'styled-components'

const SCREEN_PARTITION = 1200

const MainContainer = styled('div')`
  @media screen
    and (max-width: ${SCREEN_PARTITION}px) {
      padding: 0px 20px;
  };

  @media screen
    and (min-width: ${SCREEN_PARTITION + 1}px) {
      padding: ${(props) => props.theme.universalPadding};
  };
`

export default MainContainer
