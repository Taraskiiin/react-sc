import styled from 'styled-components';
import React from 'react';

const DefaultTitleStyled = styled.h2`
	font-family: 'BalooBhai';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 38px;
	color: #000000;
	margin: 0;
`;

export default function DefaultTitle({ label }) {
	return <DefaultTitleStyled>{label}</DefaultTitleStyled>;
}
