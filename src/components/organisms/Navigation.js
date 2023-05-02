import LogoutBtn from '../atoms/LogoutBtn';
import Logo from '../atoms/Logo';
import styled from 'styled-components';
import React from 'react';

const navigations = [
	{
		id: '1',
		href: '#',
		icon: '/assets/icons/home-icon.svg',
	},
	{
		id: '2',
		href: '#',
		icon: '/assets/icons/study-icon.svg',
	},
	{
		id: '3',
		href: '#',
		icon: '/assets/icons/user-icon.svg',
	},
	{
		id: '4',
		href: '#',
		icon: '/assets/icons/email-icon.svg',
	},
	{
		id: '5',
		href: '#',
		icon: '/assets/icons/settings-icon.svg',
	},
];

const NavigationStyled = styled.div`
	background: #000000;
	position: relative;
	border-radius: 24px;
	width: 132px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 95px;
	padding: 0 0 40px 0;

	.blur {
		position: absolute;
		width: 81.01px;
		height: 804px;
		right: 0;
		top: 0;
		background: #000000;
		opacity: 0.7;
		filter: blur(30px);
		border-radius: 24px;
		z-index: -1;
	}

	& > nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 64px;

		& > a {
			text-decoration: none;
		}
	}

	@media (max-width: 1440px) {
		position: fixed;
		z-index: 100;
		top: 16px;
		margin: 0 auto;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 0;
		width: 1024px;
		height: 80px;

		.blur {
		display: none;
	}

		& > nav {
		flex-direction: row;
		gap: 32px;
	}

	@media (max-width: 1024px) {
		width: 100%;
		border-radius: 0;
		margin: 0;
		top: 0;
`;

export default function Navigation() {
	return (
		<NavigationStyled>
			<div className='blur' />
			<Logo />
			<nav>
				{navigations.map((el) => (
					<a key={el.id} href={el.href}>
						<img alt='logo' src={el.icon} />
					</a>
				))}
			</nav>
			<LogoutBtn />
		</NavigationStyled>
	);
}
