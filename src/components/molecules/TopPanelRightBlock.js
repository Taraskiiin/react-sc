import ProfileButton from '../atoms/ProfileButton';
import NotificationsCounter from '../atoms/NotificationsCounter';
import Notifications from '../atoms/Notifications';
import SearchField from '../atoms/SearchField';
import styled from 'styled-components';
import React from 'react';

const TopPanelRightBlockStyled = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 300px 26px 56px;
	align-items: center;
	gap: 15px;
`;

export default function TopPanelRightBlock() {
	return (
		<TopPanelRightBlockStyled>
			<SearchField />
			<Notifications>
				<NotificationsCounter number={1} />
			</Notifications>
			<ProfileButton />
		</TopPanelRightBlockStyled>
	);
}
