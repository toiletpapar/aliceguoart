import React from 'react'

import {
  ExternalLink,
  Icon,
  SpacedContainer,
} from './index'

const SocialMedia = (props) => {
  const {
    colour,
    etsyUrl,
    ...rest
  } = {...props}

  return (
    <SpacedContainer {...rest}>
      <ExternalLink colour={colour} to='https://twitter.com/aliceguoart'>
        <Icon className='fa fa-twitter' />
      </ExternalLink>
      <ExternalLink colour={colour} to='https://www.facebook.com/aliceguoart/'>
        <Icon className='fa fa-facebook' />
      </ExternalLink>
      <ExternalLink colour={colour} to='https://www.instagram.com/aliceguoart/?hl=en'>
        <Icon className='fa fa-instagram' />
      </ExternalLink>
      <ExternalLink colour={colour} to={etsyUrl}>
        <Icon className='fa fa-etsy' />
      </ExternalLink>
    </SpacedContainer>
  )
}

export default SocialMedia
