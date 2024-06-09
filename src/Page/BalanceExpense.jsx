import React, { useEffect, useState } from 'react'
import "./BalanceExpense.css"
import Card from "../components/Card"
import PieChartData from "../components/PieChartData";
import Button from "../components/Button/Button"
// import Modal from "react-modal";
import Modal from '../components/Modal/Modal';
import AddBalanceForm from '../components/Forms/AddBalanceForm';
import AddExpenseForm from '../components/Forms/AddExpenseForm';
import TransactionList from "../components/TransactionList/TransactionList"
import BarChartContainer from "../components/BarChart/BarChart"

const BalanceExpense = () => {
  const [totalbalance, setTotalBalance] = useState(0);
  const [totalexpense, setTotalExpense] = useState(0);
  const [expenselist, setExpenseList] = useState([]);
  const [ispageloaded,setIsPageloaded] = useState(false);
  const [categoryprice, setCategoryPrice] = useState({
    food: 0,
    entertainment: 0,
    travel: 0
  })

  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isOpenExpense, setIsOpenExpense] = useState(false)

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

  function openModal() {
    setIsOpenBalance(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpenBalance(false);
  }

  
  useEffect(() => {
    console.log('load balance')
    let balance = 0;
    balance = localStorage.getItem("balance");
    console.log("balance", balance)
    if(!balance) {
      balance = localStorage.setItem("balance",5000);
      setTotalBalance(balance)
    } else {
      setTotalBalance(balance)
    }

    const itemlist = JSON.parse(localStorage.getItem("expenses"));
    setExpenseList(itemlist || []);
    setIsPageloaded(true)
  },[])


  useEffect(() => {
    if(expenselist.length>0 || !ispageloaded) {
      localStorage.setItem("expenses",JSON.stringify(expenselist));
    }

    if(expenselist && expenselist.length>0){
      const totalexpense = expenselist.reduce((tot,curValue) => tot + Number(curValue.price),0)
      setTotalExpense(totalexpense);
    }

    let foodValue = 0;
    let entertainmentValue = 0;
    let travelValue = 0;
    expenselist.forEach((expense) => {
      if(expense.category === 'food'){
        foodValue +=Number(expense.price)
      } else if(expense.category === 'entertainment'){
        entertainmentValue +=Number(expense.price)
      } else if(expense.category === 'travel'){
        travelValue +=Number(expense.price)
      }
    })
    setCategoryPrice({
      food: foodValue,
      entertainment: entertainmentValue,
      travel: travelValue
    })

  },[expenselist])

  const handleBalance = () => {
    console.log('click Balance card');
    setIsOpenBalance(true);
  }

  const handleExpense =() => {
    console.log('click Expense card');
    setIsOpenExpense(true);
  }

  return (
    <>
    <div className='background'>
        <Card id="balance" handleClick={handleBalance} name="Wallet Balance:" amount={`₹.${totalbalance}`} buttonType="btnbalance"  btnContent="+Add Income" />
        <Card id="expense" handleClick={handleExpense} name="Expense:" amount={`₹.${totalexpense}`} buttonType="btnexpense"  btnContent="+Add Expense" /> 
        <PieChartData data={[
            { name: "Food", value: categoryprice.food },
            { name: "Entertainment", value: categoryprice.entertainment },
            { name: "Travel", value: categoryprice.travel },
          ]} />
    </div>

    <div className='divbarTransactionList'>
      <TransactionList  expenselist={expenselist} setExpenseList={setExpenseList} 
      balance={totalbalance} setbalance={setTotalBalance} />
      <div>
      <BarChartContainer  data={[
            { name: "Food", value: categoryprice.food },
            { name: "Entertainment", value: categoryprice.entertainment },
            { name: "Travel", value: categoryprice.travel },
          ]}/>
      </div>
 

    </div>

    {/* <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm />
    </Modal> */}


<Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
    <AddExpenseForm isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}
    buttonType='btncancel' balance={totalbalance} setbalance={setTotalBalance}
    expenselist={expenselist} setExpenseList={setExpenseList} />
</Modal>

<Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
    <AddBalanceForm isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}
    buttonType='btncancel' balance={totalbalance} setbalance={setTotalBalance}
     />
</Modal>

   
    </>
  ) 
}

export default BalanceExpense