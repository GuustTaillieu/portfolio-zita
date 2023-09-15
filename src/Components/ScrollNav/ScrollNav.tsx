import { useEffect, useRef, useState } from 'react';
import SCROLL_NAV_ITEMS from './scroll-nav-info';
import './ScrollNav.scss';

type Props = {};

const ScrollNav = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [lastTime, setLastTime] = useState(0);

	const galleryTitlesContainer = useRef<HTMLDivElement>(null);
	const galleryImagesContainer = useRef<HTMLDivElement>(null);
	const galleryTitles = useRef<HTMLDivElement[]>([]);
	const galleryImages = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		galleryTitles.current.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
		galleryImages.current.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
		galleryTitlesContainer.current?.style.setProperty('--scroll', '0');
		galleryImagesContainer.current?.style.setProperty('--scroll', '0');
	}, []);

	useEffect(() => {
		window.addEventListener('wheel', scrollGallery);
		return () => {
			window.removeEventListener('wheel', scrollGallery);
		};
	}, [scrollPosition, lastTime]);

	function scrollGallery(e: WheelEvent) {
		if (e.timeStamp - lastTime < 800) return;
		setLastTime(e.timeStamp);
		const scrollDirection = e.deltaY > 0 ? 1 : -1;
		const nextScrollPosition = scrollPosition + scrollDirection;
		setScrollPosition(nextScrollPosition);
		galleryImagesContainer.current?.style.setProperty(
			'--scroll',
			nextScrollPosition.toString()
		);
		galleryTitlesContainer.current?.style.setProperty(
			'--scroll',
			nextScrollPosition.toString()
		);
	}

	return (
		<div className='scroll_nav'>
			<div className='scroll_nav_title tablet'>
				<div
					className='scroll_nav_title_outer'
					ref={galleryTitlesContainer}>
					{[...Array(1)].map((_) =>
						SCROLL_NAV_ITEMS.map((item) => (
							<div
								className='scroll_nav_title_in'
								ref={(el) => galleryTitles.current.push(el!)}
								key={item.title}>
								<h2>{item.title}</h2>
							</div>
						))
					)}
				</div>
			</div>
			<div className='scroll_nav_images'>
				<div
					className='scroll_nav_images_outer'
					ref={galleryImagesContainer}>
					{[...Array(4)].map((_) =>
						SCROLL_NAV_ITEMS.map((item) => (
							<div
								className='scroll_nav_images_in'
								ref={(el) => galleryImages.current.push(el!)}
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
		</div>
	);
};

export default ScrollNav;
