import  { useState } from 'react';
import { useExpenseFormValidation, FormFieldError } from '../ValidateForm/ValidateForm'; // Ensure the correct import path
import styles from "./ExpenseForm.module.css"




function ExpenseForm({ onAddExpense }) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterExpenseAmount, setEnterExpenseAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [enterCategory, setEnterCategory] = useState("");

  const { errors, validateForm } = useExpenseFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm({ 
        title: enterTitle,
        expenseAmount: enterExpenseAmount, 
        date: enterDate,
        category: enterCategory })) return;

    const newExpense = {
        id: Math.random().toString(),
        title: enterTitle,
        expenseAmount: parseFloat(enterExpenseAmount),
        date: enterDate,
        category: enterCategory,
    };

        onAddExpense(newExpense);
        setEnterTitle("");
        setEnterExpenseAmount("");
        setEnterDate("");
        setEnterCategory("");
    };

  return (
   <>
        <div className={styles.expense_information}>
        <form className={styles.expense_form}  onSubmit={handleSubmit}>
     
        <label className={styles.expense_label} htmlFor="expenseTitle">Title:</label>
        <input
          type="text"
          id="expenseTitle"
          name="title"
          value={enterTitle}
          onChange={(e) => setEnterTitle(e.target.value)}
        />
        <FormFieldError message={errors.title} />
      
      
        <label htmlFor="expenseAmount">Amount:</label>
        <input
            type="text"
            pattern="\d*"  
          name="expenseAmount"
          value={enterExpenseAmount}
          onChange={(e) => setEnterExpenseAmount(e.target.value)}
        />
        <FormFieldError message={errors.expenseAmount} />
      
      
        <label htmlFor="expenseDate">Date:</label>
        <input
          type="date"
          name="date"
          value={enterDate}
          onChange={(e) => setEnterDate(e.target.value)}
        />
        <FormFieldError message={errors.date} />
      
      
        <label htmlFor="expenseCategory">Category:</label>
        <select
          type="expenseCategory"
          name="category"
          value={enterCategory}
          onChange={(e) => setEnterCategory(e.target.value)}
        >
          <option value="">Choose category</option>
          <option value="housing">Housing</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothes">Clothes</option>
          <option value="other">Other</option>
        </select>
        <FormFieldError message={errors.category} />
        
     
        <button type="submit" className={styles.button}>submit</button>
        </form>

   

    
    </div>
   
    </>
  );
}


    export default ExpenseForm;