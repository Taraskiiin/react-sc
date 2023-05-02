/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from 'styled-components';
import React from 'react';

const ProfileButtonStyled = styled.div`
	cursor: pointer;
	display: flex;
	gap: 8px;
	align-items: center;
	width: fit-content;

	.user-photo {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}
`;

export default function ProfileButton({ photo }) {
	return (
		<ProfileButtonStyled>
			<img
				className='user-photo'
				alt='user photo'
				src={photo ? photo : 'assets/incognito-user-illustration.png'}
			/>
			<img
				className='open-icon'
				alt='open icon'
				src='assets/icons/down-black-small.svg'
			/>
		</ProfileButtonStyled>
	);
}
