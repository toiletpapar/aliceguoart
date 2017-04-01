import React from 'react'

import {
  SlideImage,
} from './index'

import {
  BlockContainer,
  Slider,
} from '../BasicComponents/index'

const fullHeight = '91vh'

const Home = (props) => {
  return (
    <Slider bgColour='white' height={fullHeight}>
      <BlockContainer>
        <SlideImage height={fullHeight} src='/home/slides/WelcomeSlide.jpg' />
      </BlockContainer>
    </Slider>
  )
}

export default Home
