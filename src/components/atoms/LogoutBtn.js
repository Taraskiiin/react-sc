import styled from 'styled-components';
import React from 'react';

const LogoutBtnStyled = styled.div`
	cursor: pointer;
`;

export default function LogoutBtn() {
	return (
		<LogoutBtnStyled>
			<img alt='logout icon' src='assets/icons/logout-icon.svg' />
		</LogoutBtnStyled>
	);
}
