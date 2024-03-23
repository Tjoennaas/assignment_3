
import { useState } from 'react';


export function useExpenseFormValidation() {
    const [errors, setErrors] = useState({   // UseState hook from React : to create a variable that holdes error messag.
        title: "",                          //  The property is connected to the name attributes in the form.
        expenseAmount: "",                 // "" -> Start with empty forms that also indicat its noe errors.
        date: "",
        category: "",
    });


    const validateForm = ({ title, expenseAmount, date, category }) => {   //  {} : Propertis: Past data from parent to child 
        const newErrors = {};  //  newErrors as {} -> you start with the assumption that there are no errors, and then add errors as they are discovered during validation.
        if (!title) newErrors.title = "Title is required.";   // ! ->  if the title field is empty the tekst will render
        if (!expenseAmount) newErrors.expenseAmount = "Amount is required.";
        if (!date) newErrors.date = "Date is required.";
        if (!category) newErrors.category = "Category is required.";
        setErrors(newErrors);   // Updates the errors state with any new errors found, which can then be used to display error messages to the user.
        return Object.keys(newErrors).length === 0;   // Object.keys(newErrors): containing all the  keys of the  "newErrors"
                                                     // length: This property of the array tells you how many keys are in the "newErrors"
    };                                               // == 0: If its now keys, the newerror is empty and it will returne true

    return { errors, validateForm };
} 


export function FormFieldError({ message }) {
    if (!message) return false;

    return <div style={{ color: 'red' }}>{message}</div>;
}


