


import { useSate } from "react" ;


function ExpenseForm () {

const [ enterTitle, setEnterTitle ] = useSate ("");
const [ enterExpenseAmount, setEnterExpenseAmount ] = useSate ("");
const [ enterDate, setEnterDate ] = useSate ("");
const [ enterCategory, setEnterCategory ] = useSate ("");


return(

    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="expenseTitle">Title:</label>
      <input
        type="text"
        id="expenseTitle"
        name="title"
        value={enterTitle}
        onChange={(e) => setEnterTitle(e.target.value)}
      />
    </div>
      
    <div>
      <label htmlFor="expenseDate">Date:</label>
      <input
        type="date"
        id="expenseDate"
        name="date"
        value={enterDate}
        onChange={(e) => setEnterDate(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="expenseAmount">Amount:</label>
      <input
        type="number"
        id="expenseAmount"
        name="expenseAmount"
        value={enterExpenseAmount}
        onChange={(e) => setEnterExpenseAmount(e.target.value)}
      />
 
    </div>


    <div>
      <label htmlFor="expenseCategory">Category:</label>
      <select
        id="expenseCategory"
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
     </div>
          <button type="submit">Submit</button>
     </form>
   );
  }

    export default ExpenseForm;