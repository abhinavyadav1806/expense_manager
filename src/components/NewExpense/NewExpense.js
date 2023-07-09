import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpese = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    );
};

export default NewExpese;