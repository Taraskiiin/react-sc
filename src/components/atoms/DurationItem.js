import styled from 'styled-components';
import React from 'react';

const DurationItemStyled = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: #000000;
	width: 96px;
	text-overflow: ellipsis;
`;

export default function DurationItem({ hours, minutes }) {
	return (
		<DurationItemStyled>
			<img alt='clock icon' src='assets/icons/black-clock.svg' />
			<span>{hours}h</span>
			<span>{minutes}min</span>
		</DurationItemStyled>
	);
}
