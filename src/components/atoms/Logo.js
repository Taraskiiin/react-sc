import styled from 'styled-components';
import React from 'react';

const LogoStyled = styled.h2`
	font-family: 'Baloo Bhai';
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 102px;
	color: #ffffff;
	margin: 0;
`;

export default function Logo() {
	return <LogoStyled>F.</LogoStyled>;
}
