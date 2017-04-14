import React from 'react'

import { HighlightContainer, HighlightImage, HighlightContent } from './index'

import {
  RegularHeader,
  Paragraph,
  Button,
} from '../index'

const Highlight = (props) => {
  const {
    src = '',
    title,
    content,
  } = props

  return (
    <HighlightContainer>
      {src ? <HighlightImage src={src} /> : null}
      <HighlightContent>
        <RegularHeader>{title}</RegularHeader>
        <Paragraph>
          {content}
        </Paragraph>
        <Button padding='5px 10px'>Read More</Button>
      </HighlightContent>
    </HighlightContainer>
  )
}

export default Highlight
