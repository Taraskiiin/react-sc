import TopPanelRightBlock from '../molecules/TopPanelRightBlock';
import styled from 'styled-components';
import React from 'react';

const RightPartStyled = styled.div`
	padding-top: 24px;
	max-width: 440px;

	@media (max-width: 1440px) {
		max-width: 620px;
		padding-top: 140px;
		margin: auto;
	}
`;

export default function RightPart() {
	return (
		<RightPartStyled>
			<TopPanelRightBlock />
		</RightPartStyled>
	);
}
