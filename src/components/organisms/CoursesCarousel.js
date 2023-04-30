import CustomSwiperSlide from '../molecules/CustomSwiperSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import React from 'react';

const carouselList = [
	{
		id: '1',
		logo: '/assets/course-logo/spanish-logo.svg',
		title: 'Spanish B2',
		author: 'by Alejandro Velazquez',
		progress: '83',
	},
	{
		id: '2',
		logo: '/assets/course-logo/instagram-logo.svg',
		title: 'Master Instagram',
		author: 'by Sophie Gill',
		progress: '46',
	},
];

export default function CoursesCarousel() {
	return (
		<div>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				{carouselList.map((el) => (
					<SwiperSlide>
						<CustomSwiperSlide
							key={el.id}
							logo={el.logo}
							title={el.title}
							author={el.author}
							progress={el.progress}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
