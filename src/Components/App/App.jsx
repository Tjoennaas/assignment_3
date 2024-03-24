
 import { useState } from 'react';
 import ExpenseForm from '../ExpenseForm/ExpenseForm'; 
 import RenderdExpenseList from '../RenderdExpenseList/RenderdExpenseList'; 

function App() {
  const [expenses, setExpenses] = useState([]);        //setExpenses : Use to update the expenses state.

  const addExpense = (newExpense) => {
     setExpenses((prevExpenses) =>         //PrevExpenses: Represents the current state of the expenses before the update.                       
     [...prevExpenses, newExpense]);          //The spread operator ... is used to expand prevExpenses into its individual elements and add new expense to the array.                 
                                                                 
  };

  const removeExpense = (id) => {                            
    setExpenses((prevExpenses) =>                    // SetExpenses((prevExpenses): Represents the current state of the expenses list before any changes                   
    prevExpenses.filter((expense) =>                 // PrevExpense.filter:  Iterates over prevExpenses.
    expense.id !== id));                              //.filter(expense): Decide whether each element should be included in the new array.
                                                     // expense.id !== id: ID is not the same as the id you want to remove(true)
                                                     
   };                                   

  const totalExpenses = expenses.reduce((sum, expense) => 
         sum + expense.expenseAmount, 0);
         

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} />

      <RenderdExpenseList expenses={expenses} onRemoveExpense={removeExpense} />

      <div>Total Expenses: ${totalExpenses.toFixed(2)}</div>

    </>
  );
}

export default App;