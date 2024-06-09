import React from 'react'
import "./Transaction.css"
import { PiPizzaThin } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";

const Transaction = ({expense,handleDelete,handleEdit}) => {
   
  return (
    <div className="transactioncard">
        <div className='transactioncardinner'>
            <div className='iconstyle'>
                 <PiPizzaThin />
            </div>
           
            <div className="title">
                <h5>{expense.title}</h5>
                <p>{expense.date}</p>
            </div>
           
        </div>
        <div className='transactioncardinner'>
          <span>{`₹.${expense.price}`}</span>
          <button className='delete' onClick={handleDelete}>
                <MdDeleteForever />
             </button>
          <button className='edit' onClick={handleEdit}>
          
            <VscEdit />
          </button>
           
           
        </div>
       
     
  </div>
    
  )
}

export default Transaction