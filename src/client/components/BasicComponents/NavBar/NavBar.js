import React from 'react'
import styled from 'styled-components'

import {
  RadioGroup,
  RadioContainer,
  SmallHeader,
  BorderContainer,
} from '../index'

const NavImage = styled('img')`
  width: 40px;
  height: 40px;
`

class NavBar extends React.Component {
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

  ourChange = (value) => {
    this.setState({
      selected: value,
    })
    this.props.onChange(value)
  }

  render () {
    const {
      options = [],  // {label: string, value: any} pairs
      initialValue,
      bgColour = 'white',
      textColour = 'darkgray',
    } = this.props

    return (
      <BorderContainer>
        <RadioGroup align='center' initialValue={initialValue} onChange={this.ourChange} bgColour={bgColour} activeBgColour={bgColour} textColour={textColour}>
          {
            options.map((option) => {
              return (
                <RadioContainer value={option.value} key={option.value}>
                  <BorderContainer bottom active={this.state.selected === option.value}>
                    <NavImage src={option.src} />
                    <SmallHeader align='center'>{option.label}</SmallHeader>
                  </BorderContainer>
                </RadioContainer>
              )
            })
          }
        </RadioGroup>
      </BorderContainer>
    )
  }
}

export default NavBar
