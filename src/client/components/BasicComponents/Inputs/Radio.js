import React from 'react'
import styled from 'styled-components'

import {MultiColumnContainer, Column} from '../index'
import {Button} from './index'

class RadioGroup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.initialValue,
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.initialValue !== nextProps.initialValue) {
      this.setState({
        selected: nextProps.initialValue,
      })
    }
  }

  handleChange = (value) => {
    this.setState({
      selected: value,
    })

    this.props.onChange(value)
  }

  render () {
    // Manipulate children props for the user
    const children = React.Children.map(this.props.children, (child) => {
      const props = {
        bgColour: this.props.bgColour,
        activeBgColour: this.props.bgColour,
        textColour: this.props.textColour,
        onChange: this.handleChange,
      }

      if (child.props.value === this.state.selected) {
        props.activeBgColour = this.props.activeBgColour
      }

      return React.cloneElement(child, props)
    })

    const {direction, ...rest} = this.props

    return direction === 'column' ? (
      <Column {...rest}>
        {children}
      </Column>
    ) : (
      <MultiColumnContainer {...rest}>
        {children}
      </MultiColumnContainer>
    )
  }
}

const Radio = (props) => {
  const {
    children,
    bgColour,
    activeBgColour,
    textColour,
    value,
    onChange,
    ...rest
  } = props

  const onClick = () => onChange(value)

  return (
    <Button
      colour={activeBgColour}
      activeColour={bgColour}
      textColour={textColour}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  )
}

const RadioContainer = styled(Radio)`
  cursor: pointer;
  width: 100%;
`

export {
  Radio,
  RadioGroup,
  RadioContainer,
}
