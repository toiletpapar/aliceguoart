import React from 'react'

import {TextFormatter} from '../../../Utils/index'

import {
  MainContainer,
  LargeHeader,
  SmallHeader,
  BorderContainer,
  SpacedContainer,
  Image,
  MultiColumnContainer,
} from '../index'

const BlogPost = (props) => {
  const {
    title,
    text,
    timestamp,      // (UTC milliseconds)
    imgSrc = null,  // The picture to use for the post
    ...rest
  } = props

  return (
    <MainContainer {...rest}>
      <BorderContainer bottom>
        <LargeHeader margin='1em 0em 0em 0em' thin>{title}</LargeHeader>
        {/* Convert timestamp to humanized text with moment if available */}
        <SmallHeader margin='0px' thin>{timestamp}</SmallHeader>
      </BorderContainer>
      <BorderContainer bottom>
        <SpacedContainer>
          <MultiColumnContainer>
            <Image src={imgSrc} />
          </MultiColumnContainer>
        </SpacedContainer>
      </BorderContainer>
      {TextFormatter.paragraphizeText(text)}
    </MainContainer>
  )
}

export default BlogPost
