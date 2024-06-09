import React from 'react'
import "./Card.css"
import {  TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Modal from "react-modal";
import { useState } from 'react';
// import { BorderStyle } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

import Button from "./Button/Button";

const Card = ({id, name, amount, stylename, btnContent, buttonType, handleClick}) => {
  // const [modalIsOpen, setIsOpen] = useState(false);
  console.log(name, amount)

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     backgroundColor: '#EFEFEF',
  //     borderRadius: '15px'
  //   },
  // };


  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div className='card'>
      {/* <div className='cardtitle' >
        <p className='hdrwhite'>{name}</p>
        <p className='hdrwallet'>{amount}</p>
       </div> */}

       <h3 className='hdrwhite'>{name}
        <span className='hdrwallet'>{amount}</span>
       </h3>
       <Button
          style={buttonType}
          handleClick={handleClick}
        
         
        >
          {btnContent}
        </Button>

    </div>
    
  )
}

export default Card