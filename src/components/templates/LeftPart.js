import BigBanner from '../atoms/BigBanner';
import CoursesCarousel from '../organisms/CoursesCarousel';
import CoursesList from '../organisms/CoursesList';
import styled from 'styled-components';
import React from 'react';

const LeftPartStyled = styled.div`
	padding-top: 24px;
	max-width: 620px;

	@media (max-width: 1440px) {
		padding-top: 140px;
		margin: auto;
	}
`;

export default function LeftPart() {
	return (
		<LeftPartStyled>
			<BigBanner />
			<CoursesCarousel />
			<CoursesList />
		</LeftPartStyled>
	);
}
