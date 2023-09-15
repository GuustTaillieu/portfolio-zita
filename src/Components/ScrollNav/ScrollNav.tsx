import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SCROLL_NAV_ITEMS from './scroll-nav-info';
import './ScrollNav.scss';

type Props = {};

const ScrollNav = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [lastTime, setLastTime] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

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

	const animationVariants = {
		initial: { scale: 1, x: '-50%' },
		animate: { scale: 1.8, x: '-130%' },
	};

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

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.type === 'click') {
			setIsAnimating(!isAnimating); // Toggle the animation state
		}
	};

	return (
		<motion.div
			className='scroll_nav'
			initial='initial'
			transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
			animate={isAnimating ? 'animate' : 'initial'}
			variants={animationVariants}>
			<div className='scroll_nav_title tablet'>
				<div
					className='scroll_nav_title_outer'
					ref={galleryTitlesContainer}>
					{[...Array(1)].map((_) =>
						SCROLL_NAV_ITEMS.map((item) => (
							<div
								className='scroll_nav_title_in'
								onClick={handleClick}
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
								onClick={handleClick}
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
		</motion.div>
	);
};

export default ScrollNav;
