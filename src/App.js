import LeftPart from './components/templates/LeftPart';
import Navigation from './components/organisms/Navigation';
import styled from 'styled-components';

const AppStyled = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 24px 32px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1440px) {
		max-width: 1024px;
		grid-template-columns: repeat(1, 620px);
		padding: 16px;
		justify-content: center;
	}

	@media (max-width: 1024px) {
		padding: 0;
	}
`;

function App() {
	return (
		<AppStyled>
			<Navigation />
			<LeftPart />
		</AppStyled>
	);
}

export default App;
