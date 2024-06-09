import React, { useEffect, useState } from 'react'
import "./TransactionList.css"
import Transaction from "./Transaction"
import Pagination from "../Pagination/Pagination";
import Modal from '../Modal/Modal';
import AddExpenseForm from '../Forms/AddExpenseForm';

const TransactionList = ({expenselist, setExpenseList, balance, setbalance}) => {
   const [transactions, setTransactions] = useState([])
   const maxRecordsperPage = 3;
   const [totalPages, setTotalPages] = useState(0);
   const [currentPage,setCurrentPage] = useState(1);
   const [isEditExpenseForm, setIsEditExpenseForm] = useState(false);
   const [expenseEditId, setExpenseEditId] = useState(0);

   useEffect(() => {

    if(expenselist && expenselist.length>0){
      const startIndex = (currentPage -1) * maxRecordsperPage;
      const endIndex = currentPage*maxRecordsperPage;
      setTransactions([...expenselist].slice(startIndex, endIndex))
      setTotalPages(Math.ceil(expenselist.length /maxRecordsperPage));


    }
   },[currentPage,expenselist])

   const handleDelete = (id) => {
    const selecteditem = expenselist.find(i=>i.id === id);
    setTransactions((prev) =>  prev.filter((item) => (item.id !== selecteditem.id)));
  
   }

   const handleEdit = (id) => {
    console.log('handleEdit callinf')
    setExpenseEditId(id);
    setIsEditExpenseForm(true);

   }
  

  return (
    <div>
        <h3 className='transactionheader'>Recent Transactions</h3>
        <div className='transactionlist'>
          <div>
          {  transactions.map((trans) => (
            <Transaction key={trans.id}  expense={trans} handleDelete={() => handleDelete(trans.id)}  
            handleEdit={() => handleEdit(trans.id)} />
            ))
          }
          </div>
          {
          expenselist && expenselist.length>0 && <Pagination totalPages={totalPages} currentPage={currentPage} updatePageNo={setCurrentPage}  />
          }
         
    
        </div>

        {/* <Modal isOpen={isEditExpenseForm} setIsOpen={setIsEditExpenseForm}>
    <AddExpenseForm isOpen={isEditExpenseForm} setIsOpen={setIsEditExpenseForm}
    buttonType='btncancel' balance={balance} setbalance={setbalance}
    expenselist={expenselist} setExpenseList={setExpenseList} />
</Modal> */}

   <Modal isOpen={isEditExpenseForm} setIsOpen={setIsEditExpenseForm}>
    <AddExpenseForm expenseEditId={expenseEditId}  isOpen={isEditExpenseForm} setIsOpen={setIsEditExpenseForm}
    buttonType='btncancel' expenselist={expenselist} setExpenseList={setExpenseList}
    balance={balance} setbalance={setbalance}  />
</Modal>

        
    </div>
  )
}

export default TransactionList