import React from 'react'

import {
  MissionContainer,
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
} from '../BasicComponents/index'

const About = (props) => {
  return (
    <BlockContainer>
      <MissionContainer>
        <LargeHeader align='center'>"She's a very nice person with a poo for a head that stinks up the world like it's the largest toilet out there"</LargeHeader>
      </MissionContainer>
      <MainContainer>
        <SpacedContainer>
          <FreeImage src='/about/alice_guo_about.jpg' />
          <Paragraph>
            Lorem ipsum dolor sit amet, eu consequat nonummy eu gravida,
            est donec ante rhoncus dignissim commodo, nunc nulla mus ac. Tristique nullam,
            lectus varius facilisis suspendisse, risus imperdiet pede. Dis quis enim enim sit quis integer,
            consectetuer vel vestibulum tortor quam proin, et metus malesuada arcu mauris convallis quam.
            Ut ac laoreet, ligula hendrerit in ad. Convallis pellentesque at duis purus, velit aliquam neque lacinia,
            in pellentesque eget integer, ornare magna suscipit quisque wisi dolor. Morbi porttitor, amet pharetra sed
            ornare elit sodales. Vehicula metus tristique placerat ante vel facilisis, ante vel diam, nibh hymenaeos massa
            vel sed ante lectus, metus aliquet duis leo molestie. Cum viverra laoreet, cum a pellentesque dictumst dolor eu,
            et dui vulputate sit sit sed nibh, molestie eros leo mauris molestie ligula, sollicitudin hendrerit malesuada est
            justo in ac. Sit donec, pulvinar tortor egestas faucibus quis cum, justo ultricies at lacus, molestie amet etiam.
            Suspendisse turpis tellus tincidunt sed sit. Sit mollis, ut sed tempus in bibendum nulla.
          </Paragraph>
          <Paragraph>
            Consequat curabitur quis dolor ligula.
            Id felis metus, dui maecenas tincidunt pellentesque, nunc aliquam sed nec nullam tempus, eu leo pede donec.
            Morbi at condimentum pede, cras ac mauris mauris, vel sem sodales odio purus donec.
            Vitae iaculis nulla in praesent at, cras ac consequat sem etiam.
            Sit mollis dui vitae tellus, varius nam quis ultricies nullam. Lorem ipsum dolor sit amet, eu consequat nonummy eu gravida,
            est donec ante rhoncus dignissim commodo, nunc nulla mus ac. Tristique nullam,
            lectus varius facilisis suspendisse, risus imperdiet pede.
          </Paragraph>
        </SpacedContainer>
        <SpacedContainer>
          <LargeHeader>Contact Us</LargeHeader>
          <MultiColumnContainer>
            <Column>
              <Paragraph>Have a question or just want to comment? Send us an Email! We'd love to hear from you.</Paragraph>
              <Paragraph>aliceguoart@gmail.com</Paragraph>
            </Column>
            <Column>
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
