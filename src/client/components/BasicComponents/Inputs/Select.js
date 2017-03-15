import React from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'

const StyledSelect = styled(ReactSelect)`
  width: 150px;
`

class Select extends React.Component {
  constructor (props) {
    super(props)

    this.default = props.value

    this.state = {
      value: this.default,
    }
  }

  // Display nothing when the user focuses on the select box
  hideDefaultValue = () => {
    this.setState({
      value: null,
    })
  }

  // Display the default value passed in when the user unfocuses
  displayDefaultValue = () => {
    this.setState({
      value: this.default,
    })
  }

  render () {
    // Copy props into a new object
    const newProps = {
      ...this.props,
    }

    // Remove from the newProps the props that we've overridden
    delete newProps.value
    delete newProps.onFocus
    delete newProps.onBlur
    delete newProps.onClose
    delete newProps.placeholder

    return (
      <StyledSelect
        {...newProps}
        value={this.state.value}
        onFocus={this.hideDefaultValue}
        onBlur={this.displayDefaultValue}
        onClose={this.displayDefaultValue}
        placeholder={null}
      />
    )
  }
}

export default Select
