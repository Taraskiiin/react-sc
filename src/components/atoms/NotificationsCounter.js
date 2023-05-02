import styled from 'styled-components';
import React from 'react';

const NotificationsCounterStyled = styled.div`
	height: 16px;
	width: 16px;
	position: absolute;
	left: 65%;
	bottom: 65%;
	background: #ffffff;
	border-radius: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;

	.second-circle {
		height: 14px;
		width: 14px;
		border-radius: 100%;
		background-color: #f45b5b;
		display: grid;
		justify-content: center;
		align-items: center;
	}
`;

export default function NotificationsCounter({ number }) {
	return (
		<NotificationsCounterStyled>
			<div className='second-circle'>
				<span>{number}</span>
			</div>
		</NotificationsCounterStyled>
	);
}
