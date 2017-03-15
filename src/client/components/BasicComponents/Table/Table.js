import React from 'react'

import {
  MultiColumnContainer,
  Column,
  SmallHeader,
  SpacedContainer,
  BorderContainer,
  InlineText,
} from '../index'

const Table = (props) => {
  const {
    headers = ['One', 'Two'],
    values = [['A', 'B'], ['C', 'D']],
    sizes,
    ...rest
  } = props

  const noDataDisplay = values.length === 0
    ? (
      <MultiColumnContainer>
        <SpacedContainer>
          <InlineText>There is no data to display</InlineText>
        </SpacedContainer>
      </MultiColumnContainer>
    )
    : null

  return (
    <BorderContainer {...rest}>
      <MultiColumnContainer>
        {
          headers.map((header, headerIndex) => {
            return (
              <Column key={header} size={sizes ? sizes[headerIndex] : 1}>
                <SmallHeader>{header}</SmallHeader>
                {
                  values.map((value, index) => {
                    return (
                      <BorderContainer bottom key={index}>
                        <SpacedContainer spacing='10px 10px 10px 0px'>
                          <InlineText>{value[headerIndex]}</InlineText>
                        </SpacedContainer>
                      </BorderContainer>
                    )
                  })
                }
              </Column>
            )
          })
        }
      </MultiColumnContainer>
      {noDataDisplay}
    </BorderContainer>
  )
}

export default Table
