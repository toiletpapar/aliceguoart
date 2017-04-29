import React from 'react'

import { HighlightContainer, HighlightImage, HighlightContent } from './index'

import {
  RegularHeader,
  LargeHeader,
  Paragraph,
  Button,
  Link,
} from '../index'

const Highlight = (props) => {
  const {
    src = '',
    title,
    content,
    to,
    mini = false,
    first = false,
  } = props

  return mini
  ? (
    <Link to={to}>
      <HighlightContainer mini={mini} first={first}>
        {src ? <HighlightImage src={src} roundCorners /> : null}
        <HighlightContent>
          <RegularHeader whiteSpace='normal' align='center'>{title}</RegularHeader>
        </HighlightContent>
      </HighlightContainer>
    </Link>
  )
  : (
    <HighlightContainer mini={mini} first={first}>
      <HighlightContent>
        <LargeHeader>{title}</LargeHeader>
      </HighlightContent>
      {src ? <HighlightImage center src={src} /> : null}
      <HighlightContent>
        <Paragraph>
          {content}
        </Paragraph>
        <Link to={to}>
          <Button padding='5px 10px'>Read More</Button>
        </Link>
      </HighlightContent>
    </HighlightContainer>
  )
}

export default Highlight
