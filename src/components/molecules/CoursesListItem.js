import CourseLogoStyled from '../atoms/CourseLogo';
import BlackButton from '../atoms/BlackButton';
import RatingItem from '../atoms/RatingItem';
import DurationItem from '../atoms/DurationItem';
import styled from 'styled-components';
import React from 'react';

const ListItemStyled = styled.tr`
	background: #f5f5f7;
	border-radius: 14px;
	display: flex;
	align-items: center;
	height: 80px;
	padding: 8px 0 8px 8px;
	gap: 24px;
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}

	.course-description {
		width: 150px;
		display: flex;
		flex-direction: column;
		gap: 1px;
		text-overflow: ellipsis;

		& > h3 {
			margin: 0;
			font-family: 'BalooBhai';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 26px;
			color: #000000;
			white-space: nowrap
		}

		& > p {
			margin: 0;
			padding: 0
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 13px;
			line-height: 15px;
			color: #000000;
			white-space: nowrap
		}
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
			<CourseLogoStyled logo={logo} />
			<td className='course-description'>
				<h3>{title}</h3>
				<p>{author}</p>
			</td>
			<DurationItem hours={duration.hours} minutes={duration.minutes} />
			<RatingItem rating={rating} />
			<td style={{ padding: '0 23px 0 5px' }}>
				<BlackButton label='View course' onClick={() => console.log(title)} />
			</td>
		</ListItemStyled>
	);
}
