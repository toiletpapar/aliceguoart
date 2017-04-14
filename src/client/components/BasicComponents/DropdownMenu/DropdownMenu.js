import React from 'react'

import {slide as Menu} from 'react-burger-menu'

const DropdownMenu = (props) => {
  // We have to wrap children in native div for radium
  const _wrapChildren = (children) => {
    return children.map((child, index) => {
      return (
        <div key={children}>
          {child}
        </div>
      )
    })
  }

  return (
    <Menu radiumConfig={{ userAgent: 'all' }}>
      {_wrapChildren(props.children)}
    </Menu>
  )
}

export default DropdownMenu
