import React from 'react'

import { Icon, SpacedContainer } from '../BasicComponents/index'
import { Label } from './index'

class Checkbox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {checked: false}
  }

  onClick = (onChange) => () => {
    const checked = this.state.checked

    this.setState({
      checked: !checked,
    })

    onChange(!checked)
  }

  render () {
    const {
      onChange,
      descriptor,
    } = this.props

    return (
      <SpacedContainer onClick={this.onClick(onChange)}>
        {
          this.state.checked
          ? (<Icon className='fa fa-check-square-o' aria-hidden='true' />)
          : (<Icon className='fa fa-square-o' aria-hidden='true' />)
        }
        <Label>{descriptor}</Label>
      </SpacedContainer>
    )
  }
}

export default Checkbox
