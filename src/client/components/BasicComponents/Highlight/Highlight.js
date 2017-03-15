import React from 'react'

import { HighlightContainer, HighlightImage, HighlightContent } from './index'

import {
  RegularHeader,
  Paragraph,
  Button,
} from '../index'

const Highlight = (props) => {
  return (
    <HighlightContainer>
      <HighlightImage src={props.src} />
      <HighlightContent>
        <RegularHeader>{props.title}</RegularHeader>
        <Paragraph>
          {props.content}
        </Paragraph>
        <Button padding='5px 10px'>Read More</Button>
      </HighlightContent>
    </HighlightContainer>
  )
}

export default Highlight
