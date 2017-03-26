import React from 'react'

import {
  BlockContainer,
  IconAnchor,
} from './index'

const SocialMedia = (props) => {
  return (
    <BlockContainer>
      <IconAnchor to='https://twitter.com/aliceguoart' icon='fa fa-twitter' />
      <IconAnchor to='https://www.facebook.com/aliceguoart/' icon='fa fa-facebook' />
      <IconAnchor to='https://www.instagram.com/aliceguoart/?hl=en' icon='fa fa-instagram' />
    </BlockContainer>
  )
}

export default SocialMedia