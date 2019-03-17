import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Modal = (props) => (
  <div>
    <BootstrapModal
      key="modal"
      backdrop={ true }
      show={ props.show }
      onHide={ props.toggleModal }
    >
    <BootstrapModal.Header closeButton>
      <BootstrapModal.Title>Modal heading</BootstrapModal.Title>
    </BootstrapModal.Header>

      <h2 style={{ padding:"100px 40px" }}>Sorry, not implemented!</h2>
    </BootstrapModal>
    {props.children}
  </div>
)

// https://www.npmjs.com/package/prop-types
// You can use prop-types to document the intended types of properties passed to components. 
Modal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
}

export default Modal
