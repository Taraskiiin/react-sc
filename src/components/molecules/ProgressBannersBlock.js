import InProgressBanner from '../atoms/InProgressBanner';
import styled from 'styled-components';
import React from 'react';

const progressBannersContent = [
	{
		number: '11',
		label: 'Courses completed',
	},
	{
		number: '4',
		label: 'Courses in progress',
	},
];

const ProgressBannersBlockStyled = styled.div`
	width: 100%;
	margin-top: 24px;
	display: grid;
	gap: 24px;
	grid-template-columns: 200px 200px;
	justify-content: space-between;
`;

export default function ProgressBannersBlock() {
	return (
		<ProgressBannersBlockStyled>
			{progressBannersContent.map((el) => (
				<InProgressBanner number={el.number} label={el.label} />
			))}
		</ProgressBannersBlockStyled>
	);
}
