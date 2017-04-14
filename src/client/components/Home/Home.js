import React from 'react'

import {
  SlideImage,
} from './index'

import {
  Slider,
  Link,
} from '../BasicComponents/index'

const fullHeight = '91vh'

const Home = (props) => {
  return (
    <Slider bgColour='white' height={fullHeight}>
      <Link to='/gallery'>
        <SlideImage height={fullHeight} src='/home/slides/WelcomeSlide.jpg' />
      </Link>
    </Slider>
  )
}

export default Home
