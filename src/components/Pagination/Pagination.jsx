import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Pagination.css"

const Pagination = ({currentPage, totalPages, updatePageNo}) => {
  console.log("pageno", currentPage);
  console.log("totalPages", totalPages);

  const handleIncrease = () => {
    updatePageNo((currentPage) = currentPage + 1)
  }

  const handleDecrease = () => {
    updatePageNo((currentPage) = currentPage - 1)
  }
  
  return (
    <div className='pagination'>
        <button className='btnpagination'  disabled={currentPage === 1} onClick={handleDecrease}>
          <IoIosArrowRoundBack />
        </button>
        <p className='currentpage'>{currentPage}</p>
        <button className='btnpagination' disabled={totalPages === currentPage} onClick={handleIncrease}>
            <IoIosArrowRoundForward />
        </button>
    </div>
  )
}

export default Pagination