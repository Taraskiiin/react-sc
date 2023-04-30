import styled from 'styled-components';
import React from 'react';

const BlackButtonStyled = styled.button`
	background: #000000;
	border-radius: 8px;
	padding: 12px 24px;
	cursor: pointer;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	color: #ffffff;
	border: none;
`;

export default function BlackButton({ label, click }) {
	return <BlackButtonStyled onClick={click}>{label}</BlackButtonStyled>;
}
