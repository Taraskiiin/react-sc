import DefaultTitle from '../atoms/DefaultTitle';
import CoursesListItem from '../molecules/CoursesListItem';
import styled from 'styled-components';
import React, { useState } from 'react';

const coursesList = [
	{
		id: '1',
		logo: '/assets/course-logo/figma-logo.svg',
		title: 'Learn Figma',
		author: 'by Christopher Morgan',
		duration: {
			hours: '6',
			minutes: '30',
		},
		rating: '4,9',
	},
	{
		id: '2',
		logo: '/assets/course-logo/camera-lens-logo.svg',
		title: 'Analog photography',
		author: 'by Gordon Norman',
		duration: {
			hours: '3',
			minutes: '15',
		},
		rating: '4,7',
	},
	{
		id: '3',
		logo: '/assets/course-logo/instagram-logo.svg',
		title: 'Master Instagram',
		author: 'by Sophie Gill',
		duration: {
			hours: '7',
			minutes: '40',
		},
		rating: '4,6',
	},
	{
		id: '4',
		logo: '/assets/course-logo/pencil-logo.svg',
		title: 'Basics of drawing',
		author: 'by Jean Tate',
		duration: {
			hours: '11',
			minutes: '30',
		},
		rating: '4,8',
	},
	{
		id: '5',
		logo: '/assets/course-logo/photoshop-logo.svg',
		title: 'Photoshop - Essence',
		author: 'by David Green',
		duration: {
			hours: '5',
			minutes: '35',
		},
		rating: '4,7',
	},
];

const filter = [
	{ id: '1', label: 'All Courses' },
	{ id: '2', label: 'The Newest' },
	{ id: '3', label: 'Top Rated' },
	{ id: '4', label: 'Most Popular' },
];

export default function CoursesList() {
	const [sortBy, setSortBy] = useState('All Courses');

	return (
		<>
			<DefaultTitle label='Courses' />
			<div>
				{filter.map((el) => (
					<h3></h3>
				))}
			</div>
			<table>
				{coursesList.map((el) => (
					<CoursesListItem
						logo={el.logo}
						title={el.title}
						author={el.author}
						duration={el.duration}
						rating={el.rating}
						key={el.id}
					/>
				))}
			</table>
		</>
	);
}
