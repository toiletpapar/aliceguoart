import React from 'react'

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
  Icon,
  MultiColumnContainer,
  Anchor,
} from '../BasicComponents/index'

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
          <FreeImage src='/about/Alice_Profile.jpg' />
          <LargeHeader>Artist Statement</LargeHeader>
          <Paragraph>
            I like to explore nature and to draw inspiration from the wonders of the real world.
            My favourite thing to do is to capture any beautiful moment through photography and then to reimagine the experience through my own lens.
            My focus is specific; I love having a main character in my pieces.
            Afterwards, I enhance the most remarkable qualities of the character while keeping it simple, so that the audience can connect with the subject the way I did and relive my memory.
          </Paragraph>
          <LargeHeader>About Me</LargeHeader>
          <Paragraph>
            I have always enjoyed creating things.
            I started learning to draw at the age of three, and it was so much fun that I continued to do so until I was twelve.
            During my formal training, I practiced sketch, gouache, watercolour, acrylic, oil, and modern batik.
          </Paragraph>
          {/* <Paragraph>
            Now I am on a journey to
          </Paragraph> */}
        </SpacedContainer>
        <SpacedContainer>
          <LargeHeader>Contact Us</LargeHeader>
          <MultiColumnContainer>
            <Column margin='0px 25px 0px 0px'>
              <Paragraph>Have a question or just want to comment? Send us an email to <Anchor href='mailto:alice@aliceguoart.ca' target='_top'>alice@aliceguoart.ca</Anchor>! We'd love to hear from you.</Paragraph>
            </Column>
            <Column margin='0px 0px 0px 25px'>
              <Paragraph>Or connect with us on social media:</Paragraph>
              <BlockContainer>
                <Icon className='fa fa-twitter' />
                <Icon className='fa fa-facebook' />
                <Icon className='fa fa-instagram' />
              </BlockContainer>
            </Column>
          </MultiColumnContainer>
        </SpacedContainer>
      </MainContainer>
    </BlockContainer>
  )
}

export default About
