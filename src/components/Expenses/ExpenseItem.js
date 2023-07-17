import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

/* -- This is called object destructuring. -- */
// export default function ExpenseItem({date, title, amount})
const ExpenseItem = (props) => {
  return (
    // This is sending complete array object as a single parameter.
    // <div>{props.expense.date.toDateString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{props.expense.title}</h2>
    //     <div className="expense-item__price">${props.expense.amount}</div>
    // </div>

    // This is called object destructuring.
    // <div>{date.toDateString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{title}</h2>
    //     <div className="expense-item__price">${amount}</div>
    // </div>

    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
