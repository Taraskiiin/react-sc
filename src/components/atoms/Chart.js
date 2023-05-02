import FilterItem from '../atoms/FilterItem';
import DefaultTitle from '../atoms/DefaultTitle';
import styled from 'styled-components';
import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: false,
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			display: false,
		},
		y: {
			display: true,
		},
	},
	borderWidth: 3,
	tension: 0.6,
	pointRadius: 5,
	labels: true,
};

const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const data = {
	labels: labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: [0, 1.5, 2.5, 1, 5, 3, 2],
			backgroundColor: '#000',
			labels: true,
		},
	],
};

const filter = [
	{ id: '1', label: 'Learning Hours' },
	{ id: '2', label: 'My Courses' },
];

const FilterStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: min-content;
	gap: 32px;
	margin: 16px 0 10px 0;
`;

const ChartStyled = styled.div`
	margin-top: 30px;
`;

export default function Chart() {
	return (
		<ChartStyled>
			<DefaultTitle label='Courses' />
			<FilterStyled>
				{filter.map((el) => (
					<FilterItem key={el.id} label={el.label} />
				))}
			</FilterStyled>
			<Line options={options} data={data} />
		</ChartStyled>
	);
}
