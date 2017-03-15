import React from 'react'

import {
  RadioGroup,
  RadioContainer,
  BorderContainer,
  MultiColumnContainer,
  Column,
  SmallHeader,
  Icon,
  BlockContainer,
} from '../index'

const ArrowIcon = () => (
  <Column align='flex-end' justify='center'>
    <Icon className='fa fa-arrow-right' />
  </Column>
)

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.initialValue,
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
      <RadioGroup widthExpand initialValue={initialValue} onChange={this.ourChange} direction='column' bgColour={bgColour} activeBgColour={bgColour} textColour={textColour}>
        {
          options.map((option) => {
            const arrowComponent = option.value === this.state.selected ? <ArrowIcon /> : <BlockContainer />

            return (
              <RadioContainer value={option.value} key={option.value}>
                <BorderContainer bottom>
                  <MultiColumnContainer align='left' justify='center'>
                    <Column>
                      <SmallHeader>{option.label}</SmallHeader>
                    </Column>
                    {arrowComponent}
                  </MultiColumnContainer>
                </BorderContainer>
              </RadioContainer>
            )
          })
        }
      </RadioGroup>
    )
  }
}

export default Sidebar
