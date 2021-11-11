import { useState } from 'react/cjs/react.development';

import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesLists from './ExpensesLists';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.expenses.filter(item => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div className="expenses">
			<ExpensesFilter selected={filteredYear} expenseItems={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesLists items={filteredExpenses} />
		</div>
	);
};
export default Expenses;
