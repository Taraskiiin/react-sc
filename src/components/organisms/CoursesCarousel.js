import CustomSwiperSlide from '../molecules/CustomSwiperSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styled from 'styled-components';
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

const CoursesCarouselStyled = styled.div`
	margin-top: 24px;
	margin-bottom: 39px;

	.swiper {
		& > .swiper-button-prev,
		& > .swiper-button-next {
			width: 40px;
			height: 40px;
			border: 2px solid #000000;
			border-radius: 100px;
			right: 0;

			&::after {
				content: '' !important;
				background: url('/assets/icons/next-icon.svg');
				background-repeat: no-repeat !important;
				background-position: center;
				position: absolute;
				height: 12px;
				width: 15px;
				z-index: 10;
			}
		}

		& > .swiper-button-prev {
			left: calc(100% - 105px) !important;

			&::after {
				background: url('/assets/icons/prev-icon.svg');
			}
		}
	}
`;

export default function CoursesCarousel() {
	return (
		<CoursesCarouselStyled>
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
		</CoursesCarouselStyled>
	);
}
