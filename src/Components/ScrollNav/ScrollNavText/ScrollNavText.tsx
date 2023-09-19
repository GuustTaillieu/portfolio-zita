import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SCROLL_NAV_ITEMS from '../scroll-nav-info';
import './ScrollNavText.scss';

type Props = {
	scrollPosition: number;
	handleOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ScrollNavText = (props: Props) => {
	const galleryTitlesContainer = useRef<HTMLDivElement>(null);
	const galleryTitles = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		galleryTitles.current.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
		galleryTitlesContainer.current?.style.setProperty('--scroll', '0');
	}, []);

	useEffect(() => {
		galleryTitlesContainer.current?.style.setProperty(
			'--scroll',
			props.scrollPosition.toString()
		);
	}, [props.scrollPosition]);

	return (
		<div className='scroll_nav_title tablet'>
			<div
				className='scroll_nav_title_outer'
				ref={galleryTitlesContainer}>
				{[...Array(4)].map((_) =>
					SCROLL_NAV_ITEMS.map((item) => (
						<div
							className='scroll_nav_title_in'
							onClick={props.handleOnClick}
							ref={(el) => galleryTitles.current.push(el!)}
							key={item.title}>
							<motion.h2
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									ease: 'easeInOut',
									delay: 0.5,
								}}>
								{item.title}
							</motion.h2>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ScrollNavText;
