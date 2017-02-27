import React from 'react'

import { Highlight } from '../Highlight/index'

import {
  SlideImage,
} from './index'

import {
  MainContainer,
  BlockContainer,
  MultiColumnContainer,
  Column,
} from '../BasicComponents/index'

import { Slider } from '../Slider/index'

const Home = (props) => {
  return (
    <MainContainer>
      {/* Slider  */}
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

      {/* Updates */}
      <MultiColumnContainer>
        <Column>
          <Highlight title='Presidency' content='We are celebrating Alice Guo for president!' src='/home/highlights/cat.jpg' />
          <Highlight title='Opening Ceremony' content='Today marks the remarkable day that Alice Guo Arts officially goes online!' src='/home/highlights/cat.jpg' />
        </Column>
        <Column>
          <Highlight title='First Step' content='Alice Guo just donated her latest original to The Crystal Ball Gala. Find out what you can do to help make dreams come true.' src='/home/highlights/cat.jpg' />
          <Highlight title='The Bird Collection' content='Check out the latest collection by Alice Guo featuring many birds of the wild.' src='/home/highlights/cat.jpg' />
        </Column>
      </MultiColumnContainer>
    </MainContainer>
  )
}

export default Home
