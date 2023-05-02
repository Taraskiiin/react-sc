import styled from 'styled-components';
import React from 'react';

const NotificationsStyled = styled.div`
	width: 24px;
	height: 26px;
	background-image: url('/assets/icons/notification-icon.svg');
	position: relative;
`;

export default function Notifications({ children }) {
	return <NotificationsStyled>{children}</NotificationsStyled>;
}
