import './ExpensesLists.css';

import ExpenseItem from './ExpenseItem';

const ExpensesLists = props => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
	}

	if (props.items.length > 0) {
		return props.items.map(expense => (
			<>
				<p>{expense.id}</p>
				<ul className="expenses-list">
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				</ul>
			</>
		));
	}
};

export default ExpensesLists;
