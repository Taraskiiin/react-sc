import Banner from './components/atoms/Banner';
import CoursesList from './components/organisms/CoursesList';
import Navigation from './components/organisms/Navigation';
import styled from 'styled-components';

const AppStyled = styled.div`
	padding: 24px 32px;
`;

function App() {
	return (
		<AppStyled>
			<Navigation />
			{/* <Banner /> */}
			<CoursesList />
		</AppStyled>
	);
}

export default App;
