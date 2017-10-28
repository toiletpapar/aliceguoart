import React from 'react'

import {
  ExternalLink,
  Icon,
  SpacedContainer,
} from './index'

const defaultBrands = [{
  brand: 'twitter',
  colour: 'black',
  url: 'https://twitter.com/aliceguoart',
}, {
  brand: 'facebook',
  colour: 'black',
  url: 'https://www.facebook.com/aliceguoart/',
}, {
  brand: 'instagram',
  colour: 'black',
  url: 'https://www.instagram.com/aliceguoart/',
}, {
  brand: 'etsy',
  colour: 'black',
  url: 'https://www.etsy.com/ca/shop/AliceGuoArt',
}]

const BrandBar = (props) => {
  const {
    brands = defaultBrands,
    ...rest
  } = {...props}

  return (
    <SpacedContainer {...rest}>
      {
        brands.map((brand) => (
          <ExternalLink key={brand.brand} colour={brand.colour} to={brand.url}>
            <Icon className={`fa fa-${brand.brand}`} />
          </ExternalLink>
        ))
      }
    </SpacedContainer>
  )
}

export default BrandBar
export {
  defaultBrands,
}
