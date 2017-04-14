import React from 'react'

import { Link } from './index'
import { Image, SmallHeader } from '../index'

const PictureLink = ({src = '', name = '', to = null, active = false, className, pictureHeight}) => {
  return (
    <Link to={to} className={className}>
      <Image src={src} height={pictureHeight} />
      {name ? <SmallHeader colour='white' align='center'>{name}</SmallHeader> : <div />}
    </Link>
  )
}

export default PictureLink
