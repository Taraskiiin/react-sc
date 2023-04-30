import styled from 'styled-components';
import React from 'react';

const CourseLogoStyled = styled.div`
	background: #ffffff;
	border-radius: 12px;
	width: 64px;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function CourseLogo({ logo }) {
	return (
		<CourseLogoStyled>
			<img alt='course-logo' src={logo} />
		</CourseLogoStyled>
	);
}
