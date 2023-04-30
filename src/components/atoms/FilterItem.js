import styled from 'styled-components';
import React from 'react';

const FilterItemStyled = styled.h3`
	position: absolute;
	width: 82px;
	height: 26px;
	left: 236px;
	top: 413.39px;
	font-family: 'Baloo Bhai';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #000000;
	opacity: ${(props) => (props.selected ? '1' : '0.3')};
`;

export default function FilterItem({ label }) {
	return <div>FilterItem</div>;
}
