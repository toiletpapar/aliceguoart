import React from 'react'
import { Link } from 'react-router-dom'

import { Image, SmallHeader } from '../index'

const PictureLink = ({src = '', name = '', to = null, active = false, className}) => {
  return (
    <Link to={to} className={className}>
      <Image src={src} />
      {name ? <SmallHeader colour='white' align='center'>{name}</SmallHeader> : <div />}
    </Link>
  )
}

export default PictureLink
