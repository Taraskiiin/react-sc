import styled from 'styled-components';
import React from 'react';

const FilterItemStyled = styled.h3`
	font-family: 'BalooBhai';
	cursor: pointer;
	font-style: normal;
	white-space: nowrap;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: #000000;
	margin: 0;
	opacity: ${(props) => (props.selected ? '1' : '0.3')};
`;

export default function FilterItem({ label, selected }) {
	return (
		<FilterItemStyled selected={label === selected}>{label}</FilterItemStyled>
	);
}
