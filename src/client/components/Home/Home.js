import React from 'react'

import {
  SlideImage,
} from './index'

import {
  MainContainer,
  BlockContainer,
} from '../BasicComponents/index'

import { Slider } from '../Slider/index'

const Home = (props) => {
  return (
    <MainContainer>
      <Slider bgColour='white'>
        <BlockContainer>
          <SlideImage src='/home/slides/alice_guo_about.jpg' />
        </BlockContainer>
        <BlockContainer>
          <SlideImage src='/home/slides/alice_guo_about.jpg' />
        </BlockContainer>
        <BlockContainer>
          <SlideImage src='/home/slides/alice_guo_about.jpg' />
        </BlockContainer>
      </Slider>
    </MainContainer>
  )
}

export default Home
