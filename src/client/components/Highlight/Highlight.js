import React from 'react'

import { HighlightContainer, HighlightImage, HighlightContent } from './index'
import { Button } from '../Inputs/index'

import {
  RegularHeader,
  Paragraph,
} from '../BasicComponents/index'

const Highlight = (props) => {
  return (
    <HighlightContainer>
      <HighlightImage src={props.src} />
      <HighlightContent>
        <RegularHeader>{props.title}</RegularHeader>
        <Paragraph>
          {props.content}
        </Paragraph>
        <Button>Read More</Button>
      </HighlightContent>
    </HighlightContainer>
  )
}

export default Highlight
