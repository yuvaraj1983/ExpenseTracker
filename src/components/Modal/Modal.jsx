import React from 'react'
import Modal from "react-modal";

 Modal.setAppElement("#root");

const ModalWrapper = ({children, isOpen, setIsOpen}) => {
const handleClose = () => {
  setIsOpen(false)
}

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#EFEFEF',
          borderRadius: '15px'
        },
      };

  return (
    <>
    <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    style={customStyles}

    contentLabel="Example Modal"
  >
        {children}
  </Modal>
  </>
  )
}

export default ModalWrapper