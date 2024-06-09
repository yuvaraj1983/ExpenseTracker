import React, { useState } from 'react'
import Button from '../Button/Button'
import './AddBalanceForm.css'

const AddBalanceForm = ({isOpen, setIsOpen, buttonType, balance, setbalance}) => {
  const [income, setIncome] = useState('');

  const handleAddBalance = (e) => {
    debugger;
      setbalance((prevbal) => Number(prevbal) + Number(income));
      setIsOpen(false)
  }
  return (
    <div>
        <h3>Add Balance</h3>
        <form className='formbal' onSubmit={handleAddBalance}>
            <input type="number" placeholder='Income Amount' required
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            />
            <Button type='submit' style="btnbalance" >Add Balance</Button>
            <Button style="btncancel" handleClick={() => setIsOpen(false)}>Cancel</Button>
        </form>
    </div>
  )
}

export default AddBalanceForm