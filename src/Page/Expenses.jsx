import React from 'react';
import Header from "../components/Header"
import "./Expenses.css"
import BalanceExpense from "./BalanceExpense"

const ExpenseTracker = () => {
  return (
    <div className='appbackground' >
          <Header />
          <BalanceExpense />
    </div>
  )
}

export default ExpenseTracker