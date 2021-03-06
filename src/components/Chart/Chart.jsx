// import react from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	const dataPointValues = props.datapoints.map(dataPoint => dataPoint.value);
	//console.log(dataPointValues);
	const totalMaximum = Math.max(...dataPointValues);
	//console.log(totalMaximum);
	return (
		<div className="chart">
			{props.datapoints.map(datapoint => (
				<ChartBar
					key={datapoint.label}
					value={datapoint.value}
					maxValue={totalMaximum}
					label={datapoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
