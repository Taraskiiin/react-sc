import styled from 'styled-components';
import React from 'react';

const CourseDescriptionStyled = styled.div`
		width: 150px;
		display: flex;
		flex-direction: column;
		gap: 1px;
		text-overflow: ellipsis;

		 h3 {
			margin: 0;
			font-family: 'BalooBhai';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 26px;
			color: #000000;
			white-space: nowrap
		}

		p {
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
`;

export default function CourseDescription({ title, author }) {
	return (
		<CourseDescriptionStyled>
			<h3>{title}</h3>
			<p>{author}</p>
		</CourseDescriptionStyled>
	);
}
