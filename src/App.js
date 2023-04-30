import Navigation from './components/organisms/Navigation';
import styled from 'styled-components';

const AppStyled = styled.div`
	padding: 24px 32px;
`;

function App() {
	return (
		<AppStyled>
			<Navigation />
		</AppStyled>
	);
}

export default App;
