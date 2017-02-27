import React from 'react'
import styled from 'styled-components'

import { BlockContainer, SpacedContainer } from '../BasicComponents/index'
import { Label } from './index'

const StyledTextInput = styled('input')`
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.navyblue}`};
  width: 350px;
  height: 35px;

  &:focus {
    outline: none;
  }
`

const TextInput = (props) => {
  const {
    name,
    displayName,
    password,
    onChange,
    className,
    ...rest
  } = props

  const ourOnChange = (evt) => {
    onChange(evt.target.value)
  }

  return (
    <SpacedContainer className={className}>
      <Label htmlFor={name}>
        <BlockContainer>{displayName}</BlockContainer>
        <StyledTextInput {...rest} onChange={ourOnChange} type={password ? 'password' : 'text'} />
      </Label>
    </SpacedContainer>
  )
}

export default TextInput
