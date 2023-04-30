import styled from 'styled-components';
import React from 'react';

const RatingItemStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: #000000;
`;

export default function RatingItem({ rating }) {
	return (
		<RatingItemStyled>
			<img alt='fire icon' src={'/assets/icons/black-fire.svg'} />
			<span>{rating}</span>
		</RatingItemStyled>
	);
}
