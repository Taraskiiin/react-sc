import styled from 'styled-components';
import React from 'react';

const InProgressBannerStyled = styled.div`
	width: 208px;
	height: 96.33px;
	background: #f5f5f7;
	border-radius: 14px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	.number {
		font-family: 'BalooBhai';
		font-style: normal;
		font-weight: 400;
		font-size: 64px;
		line-height: 102px;
		color: #000000;
	}

	.label {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
	}
`;

export default function InProgressBanner({ number, label }) {
	return (
		<InProgressBannerStyled>
			<span className='number'></span>
			<span className='label'></span>
		</InProgressBannerStyled>
	);
}
