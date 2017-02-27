import React from 'react'
import styled from 'styled-components'

const StyledForm = styled('form')`
`

const Form = (props) => {
  const ourSubmit = (evt) => {
    evt.preventDefault()
    props.onSubmit()
    return false
  }

  return (
    <StyledForm onSubmit={ourSubmit} className={props.className}>
      {props.children}
    </StyledForm>
  )
}

export default Form
