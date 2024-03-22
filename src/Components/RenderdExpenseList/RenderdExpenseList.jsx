

//shild, the renderd list
 
function RenderdExpenseList({ expenses, onRemoveExpense }) {
    return (
  
  
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.category}</span>
              <span>{expense.date}</span>
              <span>{expense.expenseAmount.toFixed()}</span>
              <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
            </li>
          ))}
        </ul>
    
    );
   
  }
  
  export default RenderdExpenseList;