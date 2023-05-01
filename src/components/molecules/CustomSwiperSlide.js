import BlackButton from '../atoms/BlackButton';
import ProgressCircle from '../atoms/ProgressCircle';
import CourseDescription from '../atoms/CourseDescription';
import CourseLogo from '../atoms/CourseLogo';
import styled from 'styled-components';
import React from 'react';

const SwiperSlideStyled = styled.div`
	box-sizing: border-box;
	background: #f5f5f7;
	border-radius: 14px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
	column-gap: 24px;
	width: 500px;
	max-height: 80px;
	padding: 8px 23px 8px 8px;
`;

export default function CustomSwiperSlide({ logo, title, author, progress }) {
	return (
		<SwiperSlideStyled>
			<CourseLogo logo={logo} />
			<CourseDescription title={title} author={author} />
			<ProgressCircle percentage={progress} />
			<BlackButton label='Continue' onClick={() => console.log(title)} />
		</SwiperSlideStyled>
	);
}
