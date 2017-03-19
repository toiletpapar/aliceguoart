import React from 'react'

import SlickSlider from 'react-slick'
import { ViewPortContainer } from '../index'

const defaults = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  fade: true,
  centerMode: true,
  pauseOnHover: false,
  centerPadding: 0,
}

const Slider = (props) => {
  // Pull relevant props for Slider wrapper
  const {
    bgColour,
    children,
  } = props

  let newProps = { ...props }

  delete newProps.className
  delete newProps.children
  delete newProps.colour

  // Pass all other relevant props on
  const settings = {
    ...defaults,
    ...newProps,
  }

  return (
    <ViewPortContainer colour={bgColour} {...settings}>
      <SlickSlider {...settings}>
        {children}
      </SlickSlider>
    </ViewPortContainer>
  )
}

export default Slider
