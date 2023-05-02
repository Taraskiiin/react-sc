import styled from 'styled-components';
import React from 'react';

const bannerContent = {
	title: 'Hello Josh!',
	content: 'It’s good to see you again. ',
};

const BigBannerStyled = styled.div`
	box-sizing: border-box;
	background: #f5f5f7;
	border-radius: 14px;
	position: relative;
	height: 160px;
	display: flex;
	align-items: center;
	padding: 0 0 0 31px;

	.left-part {
		& > h1 {
			font-family: 'BalooBhai';
			font-style: normal;
			font-weight: 400;
			font-size: 36px;
			line-height: 57px;
			color: #000000;
			margin: 0;
		}
		& > p {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			color: #000000;
			margin: 0;
		}
	}

	& > img {
		position: absolute;
		width: 175px;
		height: 191px;
		bottom: 0;
		right: 104px;
	}
`;

export default function BigBanner() {
	return (
		<BigBannerStyled>
			<div className='left-part'>
				<h1>{bannerContent.title}</h1>
				<p>{bannerContent.content}</p>
			</div>
			<img alt='student Josh illustration' src='assets/josh-Illustration.png' />
		</BigBannerStyled>
	);
}
