import BlackButton from './BlackButton';
import styled from 'styled-components';
import React from 'react';

const SmallBannerStyled = styled.div`
	box-sizing: border-box;
	max-width: 100%;
	background: #f5f5f7;
	border-radius: 14px;
	height: 193px;
	padding: 24px 0 15px 25px;
	position: relative;
	margin-top: 50px;

	& > h2 {
		font-family: 'BalooBhai';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 38px;
		color: #000000;
		margin: 0 0 3px 0;
	}

	& > p {
		font-family: 'Roboto';
		max-width: 179px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
		padding: 0;
		margin: 0 0 24px 0;
	}

	& > img {
		position: absolute;
		width: 140px;
		height: 140px;
		bottom: 30px;
		right: 48px;
	}
`;

export default function SmallBanner({ title, content }) {
	return (
		<SmallBannerStyled>
			<h2>{title}</h2>
			<p>{content}</p>
			<BlackButton
				label={'Go Premium'}
				click={() => console.log('Go Premium')}
			/>
			<img alt='book illustration' src='/assets/book-illustration.png' />
		</SmallBannerStyled>
	);
}
