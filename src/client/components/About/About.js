import React from 'react'
import styled from 'styled-components'

import {
  FreeImage,
} from './index'

import {
  LargeHeader,
  BlockContainer,
  MainContainer,
  SpacedContainer,
  Paragraph,
  Column,
  MultiColumnContainer,
  Anchor,
  BrandBar,
  Image,
} from '../BasicComponents/index'

const SCREEN_PARTITION = 580

const MidScreenContainer = styled(BlockContainer)`
  @media screen
    and (max-width: ${SCREEN_PARTITION}px) {
      display: none;
  }
`

const SmallScreenContainer = styled(BlockContainer)`
  @media screen
    and (min-width: ${SCREEN_PARTITION + 1}px) {
      display: none;
  }
`

const About = (props) => {
  return (
    <BlockContainer>
      {/* <MissionContainer>
        <SpacedContainer>
          <LargeHeader align='center' whiteSpace='normal'>"Insert Text Here"</LargeHeader>
        </SpacedContainer>
      </MissionContainer> */}
      <MainContainer>
        <SpacedContainer>
          <MidScreenContainer>
            <FreeImage src='/about/Alice_Profile.jpg' />
          </MidScreenContainer>
          <SmallScreenContainer>
            <Image width='100%' src='/about/Alice_Profile.jpg' />
          </SmallScreenContainer>
          <LargeHeader>About Me</LargeHeader>
          <Paragraph>
            I like to explore nature and to draw inspiration from the wonders of the real world.
            My favourite thing to do is to capture any beautiful moment through photography and then to reimagine the experience through my own lens.
            My focus is specific; I love having a main character in my pieces.
            Afterwards, I enhance the most remarkable qualities of the character while keeping it simple, so that the audience can connect with the subject the way I did and relive my memory.
          </Paragraph>
          <Paragraph>
            I have always enjoyed creating things.
            I started learning to draw at the age of three, and it was so much fun that I continued to do so until I was twelve.
            During my formal training, I practiced sketch, gouache, watercolour, acrylic, oil, and modern batik.
          </Paragraph>
        </SpacedContainer>
        <SpacedContainer>
          <LargeHeader>Contact Us</LargeHeader>
          <MidScreenContainer>
            <MultiColumnContainer>
              <Column margin='0px 25px 0px 0px'>
                <Paragraph>Have a question or just want to comment? Send us an email to <Anchor href='mailto:alice@aliceguoart.ca' target='_top'>alice@aliceguoart.ca</Anchor>! We'd love to hear from you.</Paragraph>
              </Column>
              <Column margin='0px 0px 0px 25px'>
                <Paragraph>Or connect with us on social media:</Paragraph>
                <BrandBar spacing='0px' />
              </Column>
            </MultiColumnContainer>
          </MidScreenContainer>
          <SmallScreenContainer>
            <Paragraph>Have a question or just want to comment? Send us an email to <Anchor href='mailto:alice@aliceguoart.ca' target='_top'>alice@aliceguoart.ca</Anchor>! We'd love to hear from you.</Paragraph>
            <Paragraph>Or connect with us on social media:</Paragraph>
            <BrandBar spacing='0px' />
          </SmallScreenContainer>
        </SpacedContainer>
      </MainContainer>
    </BlockContainer>
  )
}

export default About
