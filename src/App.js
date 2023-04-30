import Banner from './components/atoms/Banner';
import CoursesCarousel from './components/organisms/CoursesCarousel';
import CoursesList from './components/organisms/CoursesList';
import Navigation from './components/organisms/Navigation';
import styled from 'styled-components';

const AppStyled = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 24px 32px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	.left-part {
		padding-top: 24px;
		max-width: 620px;
	}
`;

function App() {
	return (
		<AppStyled>
			<Navigation />
			<div className='left-part'>
				<Banner />
				<CoursesCarousel />
				<CoursesList />
			</div>
		</AppStyled>
	);
}

export default App;
