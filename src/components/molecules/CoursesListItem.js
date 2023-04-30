import CourseDescription from '../atoms/CourseDescription';
import CourseLogo from '../atoms/CourseLogo';
import BlackButton from '../atoms/BlackButton';
import RatingItem from '../atoms/RatingItem';
import DurationItem from '../atoms/DurationItem';
import styled from 'styled-components';
import React from 'react';

const ListItemStyled = styled.div`
	background: #f5f5f7;
	border-radius: 14px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(1, 1fr);
	align-items: center;
	max-height: 80px;
	padding: 8px 23px 8px 8px;
	column-gap: 24px;
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export default function CoursesListItem({
	logo,
	title,
	author,
	duration,
	rating,
}) {
	return (
		<ListItemStyled>
			<CourseLogo logo={logo} />
			<CourseDescription title={title} author={author} />
			<DurationItem hours={duration.hours} minutes={duration.minutes} />
			<RatingItem rating={rating} />
			<BlackButton label='View course' onClick={() => console.log(title)} />
		</ListItemStyled>
	);
}
