import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import React from 'react';

const CircularProgressbarStyled = styled(CircularProgressbar)`
	.CircularProgressbar-trail {
		stroke: #f5f5f7 !important;
	}
	.CircularProgressbar-path {
		stroke: #000 !important;
	}
	.CircularProgressbar-text {
		fill: #000 !important;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 32px !important;
		line-height: 36px;
	}
`;

export default function ProgressCircle({ percentage }) {
	return (
		<div style={{ width: 40, height: 40 }}>
			<CircularProgressbarStyled value={percentage} text={`${percentage}%`} />
		</div>
	);
}
