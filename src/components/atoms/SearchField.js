import styled from 'styled-components';
import React from 'react';

const SearchFieldStyled = styled.div`
	color: #000;
	max-width: 300px;
	height: 40px;
	background: #f5f5f7;
	border-radius: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	display: grid;
	align-items: center;

	& > label {
		position: relative;
		width: 20px;
		height: 20px;
		padding: 0 0 0 50px;
		cursor: pointer;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 14px;
			width: 20px;
			height: 20px;
			background-image: url('assets/icons/search-icon.svg');
			z-index: 20;
		}

		input {
			border: none;
			max-width: 200px;
			padding: 0;
			background-color: #f5f5f7;
			font-size: 20px;

			&:focus {
				outline: none;
			}
		}
	}
`;

export default function SearchField() {
	return (
		<SearchFieldStyled>
			<label>
				<input type='text' />
			</label>
		</SearchFieldStyled>
	);
}
