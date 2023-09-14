import { useEffect, useState } from 'react';
import SCROLL_NAV_ITEMS from './scroll-nav-info';
import './ScrollNav.scss';

type Props = {};

const ScrollNav = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [lastTime, setLastTime] = useState(0);

	useEffect(() => {
		const galleryItems = document.querySelectorAll(
			'.gallery_box_in'
		) as NodeListOf<HTMLDivElement>;
		galleryItems.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
	}, []);

	useEffect(() => {
		window.addEventListener('wheel', scrollGallery);
		return () => {
			window.removeEventListener('wheel', scrollGallery);
		};
	}, [scrollPosition, lastTime]);

	function scrollGallery(e: WheelEvent) {
		if (e.timeStamp - lastTime < 800) return;
		const $gallery = document.querySelector(
			'.gallery_box_outer'
		) as HTMLDivElement;
		setLastTime(e.timeStamp);
		const scrollDirection = e.deltaY > 0 ? 1 : -1;
		const nextScrollPosition = scrollPosition + scrollDirection;
		setScrollPosition(nextScrollPosition);
		$gallery.style.setProperty('--scroll', nextScrollPosition.toString());
	}

	return (
		<div className='gallery_box'>
			<div className='gallery_box_outer'>
				{[...Array(4)].map((_) =>
					SCROLL_NAV_ITEMS.map((item) => (
						<div
							className='gallery_box_in'
							key={item.title}
							style={{
								backgroundImage: `url(${item.image})`,
							}}>
							<h2 className='mobile'>{item.title}</h2>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ScrollNav;
