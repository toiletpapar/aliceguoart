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
        <SlideImage height={fullHeight} src='/home/slides/alice_guo_about.jpg' />
      </BlockContainer>
      <BlockContainer>
        <SlideImage height={fullHeight} src='/home/highlights/cat.jpg' />
      </BlockContainer>
      <BlockContainer>
        <SlideImage height={fullHeight} src='/about/Alice_Profile.jpg' />
      </BlockContainer>
    </Slider>
  )
}

export default Home
