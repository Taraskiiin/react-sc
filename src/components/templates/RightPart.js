import SmallBanner from '../atoms/SmallBanner';
import Chart from '../atoms/Chart';
import TopPanelRightBlock from '../molecules/TopPanelRightBlock';
import ProgressBannersBlock from '../molecules/ProgressBannersBlock';
import styled from 'styled-components';
import React from 'react';

const RightPartStyled = styled.div`
	padding-top: 24px;
	max-width: 440px;

	@media (max-width: 1440px) {
		min-width: 620px;
		padding-top: 40px;
		margin: auto;
	}
`;

const smallBannerContent = {
	title: 'Lern even more!',
	content: 'Unlock premium features only for $9.99 per month.',
};

export default function RightPart() {
	return (
		<RightPartStyled>
			<TopPanelRightBlock />
			<ProgressBannersBlock />
			<Chart />
			<SmallBanner
				title={smallBannerContent.title}
				content={smallBannerContent.content}
			/>
		</RightPartStyled>
	);
}
