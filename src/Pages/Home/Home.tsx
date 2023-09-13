import { motion } from 'framer-motion';
import { PageTransition } from '../../transitions';
import './Home.scss';
import { useEffect, useState } from 'react';

type Props = {};

const Home = (props: Props) => {
	useEffect(() => {
		const galleryItems = document.querySelectorAll(
			'.gallery_box_in'
		) as NodeListOf<HTMLDivElement>;
		galleryItems.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
	}, []);

	window.addEventListener('wheel', scrollGallery);

	const [scrollPosition, setScrollPosition] = useState(0);

	function scrollGallery(e: WheelEvent) {
		// every second the scroll position changes by 1 or -1 depending on the direction
		// the scroll position is used as a deg value for the rotation of the gallery (this will be a number between 0 and 18)
		setScrollPosition(scrollPosition + (e.deltaY > 0 ? 1 : -1));

		const gallery = document.querySelector(
			'.gallery_box_outer'
		) as HTMLDivElement;
		gallery.style.setProperty('--scroll', scrollPosition.toString());
	}

	return (
		<PageTransition>
			<div className='home'>
				<div className='gallery_box'>
					<div className='gallery_box_outer'>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
						<div className='gallery_box_in'></div>
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Home;
