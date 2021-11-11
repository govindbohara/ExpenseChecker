import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
	const [title, changeTitle] = useState(props.title);

	const clickhandler = () => {
		changeTitle('Updated!!!!!');
		console.log(title);
	};
	return (
		<li>
			<div className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">$ {props.amount}</div>
					<button onClick={clickhandler}>change title</button>
				</div>
			</div>
		</li>
	);
};
export default ExpenseItem;
