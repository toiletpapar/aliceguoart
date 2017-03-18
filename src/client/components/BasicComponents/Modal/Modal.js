import React from 'react'
import ReactModal from 'react-modal'
import App from '../../../App'

ReactModal.setAppElement(App)

const Modal = (props) => {
  return (
    <ReactModal {...props}>
      {props.children}
    </ReactModal>
  )
}

export default Modal
