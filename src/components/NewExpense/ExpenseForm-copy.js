import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]   = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate]     = useState('');
    const [addNewExpense, setAddNewExpense] = useState(false);

    // const [userinput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        // setUserInput({
        //     ...userinput,
        //     enteredTitle : event.target.value
        // });

        // Must use this sytax whenever your state updates depends on the previous state
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredDate: event.target.value
        // });
    };

    // const inutChangehandler = (identifier, value) => {
    //     if ( identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if ( identifier === 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    const onAddNewExpenseHandler = () => {
        setAddNewExpense(true);
    }

    const onCancelHandler = () => {
        setAddNewExpense(false);
    }

    let showAddNewExpenseForm;

    if ( addNewExpense ) {
        showAddNewExpenseForm = (
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} ></input>
                    {/* onChange={ (event) => inutChangehandler('title', event.target.value) }  */}
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler} ></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" value={enteredDate} max="2023-07-31" onChange={dateChangeHandler} ></input>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>

                <div className="new-expense__actions_cancel">
                    <button type="submit" onClick={onCancelHandler}>Cancel</button>
                </div>
            </div>
        );
    } else {
        showAddNewExpenseForm = (
            <div className="new-expense__add-new-expense-actions">
                <button type="submit" onClick={onAddNewExpenseHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <form onSubmit={submitHandler}>
            {showAddNewExpenseForm}
        </form>
    );
};

export default ExpenseForm;