import React from 'react'

import {
  SlideImage,
} from './index'

import {
  Slider,
  Link,
  ViewPortContainer,
} from '../BasicComponents/index'

const fullHeight = '91vh'

const Home = (props) => {
  return (
    <ViewPortContainer colour='white' height={fullHeight}>
      <Slider>
        <Link to='/gallery'>
          <SlideImage height={fullHeight} src='/home/slides/WelcomeSlide.jpg' />
        </Link>
      </Slider>
    </ViewPortContainer>
  )
}

export default Home
