


import Styles from "./RenderdExpenseList.module.css";

function RenderdExpenseList({ expenses, onRemoveExpense }) {
    return (
        <>   
      
           
      <h1>Expense Tracker App</h1>

            <header className={Styles.header}>
                <span>Title:</span>
                <span>Category:</span>
                <span>Date:</span>
                <span>Amount:</span>
                <span></span>
            </header>

            <ul className={Styles.renderdList}>
                {expenses.map((expense) => (
                    <li key={expense.id} className={Styles.listItem} >
                        <span>{expense.title}</span>
                        <span>{expense.category}</span>
                        <span>{expense.date}</span>
                        <span>{expense.expenseAmount.toFixed(2)}</span>
                        <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
                    </li>
                ))}
            </ul>
      
        </>
    );
}

export default RenderdExpenseList;
  