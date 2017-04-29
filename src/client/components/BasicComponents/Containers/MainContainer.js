import styled from 'styled-components'

const MainContainer = styled('div')`
  @media screen
    and (max-width: 1199px) {
      padding: 0px 20px;
  };

  @media screen
    and (min-width: 1200px) {
      padding: ${(props) => props.theme.universalPadding};
  };
`

export default MainContainer
