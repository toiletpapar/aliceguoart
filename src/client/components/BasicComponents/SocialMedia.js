import React from 'react'

import {
  IconAnchor,
  SpacedContainer,
} from './index'

const SocialMedia = (props) => {
  const {
    colour,
    ...rest
  } = {...props}

  return (
    <SpacedContainer {...rest}>
      <IconAnchor colour={colour} to='https://twitter.com/aliceguoart' icon='fa fa-twitter' />
      <IconAnchor colour={colour} to='https://www.facebook.com/aliceguoart/' icon='fa fa-facebook' />
      <IconAnchor colour={colour} to='https://www.instagram.com/aliceguoart/?hl=en' icon='fa fa-instagram' />
    </SpacedContainer>
  )
}

export default SocialMedia
