import React, { useEffect, useState } from 'react'
import './AddExpenseForm.css'
import Button from '../Button/Button'
import { enqueueSnackbar } from 'notistack'

const AddExpenseForm = ({buttonType,expenselist, setExpenseList, isOpen, setIsOpen, balance,
   setbalance, expenseEditId}) => {

  const [formData, setFormData] = useState({
    title: '',
    price:'',
    category:'',
    date:''
  })

  useEffect(() => {
    if(expenseEditId) {
        const selectedexpense = expenselist.find((item) => ( item.id === expenseEditId ))
        setFormData({
          title: selectedexpense.title,
          price:selectedexpense.price,
          category:selectedexpense.category,
          date:selectedexpense.date
      });
    }
  },[])

  const handleAddExpense =  (e) => {
    console.log("Add expense");
    e.preventDefault();

    if(Number(formData.price) > Number(balance)){
      enqueueSnackbar("Expense Amount cannot be greater than balance amount", { variant: "warning" })
      setIsOpen(false);
      return;
    }

    setbalance((prev) => prev - Number(formData.price));
 
    const lastId = expenselist.length > 0 ? expenselist[0].id : 0
    setExpenseList(prev => [{ ...formData, id: lastId + 1 }, ...prev])

    setFormData({
      title: '',
      price:'',
      category:'',
      date:''
    })
    setIsOpen(false);
  }

  const handleEditExpense = (e) => {
    e.preventDefault();

   let pricedifference = 0;
   let balamt =  balance;
 
    const editData = expenselist.map((item) => {
      if(item.id === expenseEditId){
   
        pricedifference = item.price - formData.price;

        if(pricedifference<0 && Math.abs(pricedifference) > balance){
          enqueueSnackbar("Price should be less than Balance Amount",{variant: 'warning'});
          setIsOpen(false);
          return { ...item};
        }
        setbalance((prevValue) => (prevValue + pricedifference));
        return { ...formData, id: expenseEditId }
      } else {
        return item;
      }
       
    })
    
    

    setExpenseList(editData);
    setIsOpen(false);
  }

  const handleChange = (e) => {
    
    console.log("handleChange");
    const name = e.target.name;
    setFormData((prevValue) => ({...prevValue, [name]: e.target.value}))
  }
  return (
    <div>
        <h3>{expenseEditId?"Edit Expense": "Add Expense"}</h3>
        <form className='form' onSubmit={expenseEditId? handleEditExpense : handleAddExpense}>
            <input type="text"name="title" placeholder='Title' required 
            value={formData.title}
            onChange={handleChange}/>
            <input type="number"name="price" placeholder='Price' required 
             value={formData.price}
            onChange={handleChange}/>
            <select name="category"  required onChange={handleChange}
             value={formData.category}
            >
            <option value=''>Select Category</option>
                <option value='food'>Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
            </select>
            <input  name="date" type="date" required 
            value={formData.date}
            onChange={handleChange}  />
                  <Button type="submit"  style="btnbalance" >Add Expense</Button>
                  <Button style="btncancel" handleClick={() => setIsOpen(false)} >Cancel</Button>
        </form>
    </div>
  )
}

export default AddExpenseForm