import CourseDescription from '../atoms/CourseDescription';
import CourseLogo from '../atoms/CourseLogo';
import styled from 'styled-components';
import React from 'react';

const SwiperSlideStyled = styled.div`
	max-width: 500px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export default function CustomSwiperSlide({ logo, title, author, progress }) {
	return (
		<SwiperSlideStyled>
			<CourseLogo logo={logo} />
			<CourseDescription title={title} author={author} />
		</SwiperSlideStyled>
	);
}
