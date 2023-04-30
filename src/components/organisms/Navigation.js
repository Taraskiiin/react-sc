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
	border-radius: 24px;
	width: 132px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 95px;
	padding: 0 0 40px 0;

	& > nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 64px;

		& > a {
			text-decoration: none;'
		}
	}
`;

export default function Navigation() {
	return (
		<NavigationStyled>
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
