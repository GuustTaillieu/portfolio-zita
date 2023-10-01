import React, { useEffect, useRef } from 'react';
import './ScrollNavImages.scss';
import SCROLL_NAV_ITEMS from '../scroll-nav-info';

type Props = {
	scrollPosition: number;
	handleOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ScrollNavImages = ({ scrollPosition, handleOnClick }: Props) => {
	const galleryImagesContainer = useRef<HTMLDivElement>(null);
	const galleryImages = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		galleryImages.current.forEach((item, index) => {
			item.style.setProperty('--i', index.toString());
		});
		galleryImagesContainer.current?.style.setProperty('--scroll', '0');
	}, []);

	useEffect(() => {
		galleryImagesContainer.current?.style.setProperty(
			'--scroll',
			scrollPosition.toString()
		);
	}, [scrollPosition]);

	return (
		<div className='scroll_nav_images'>
			<div
				className='scroll_nav_images_outer'
				ref={galleryImagesContainer}>
				{[...Array(4)].map((_) =>
					SCROLL_NAV_ITEMS.sort(
						(a, b) => a.scrollPosition - b.scrollPosition
					).map((item) => (
						<div
							onClick={handleOnClick}
							className='scroll_nav_images_in'
							ref={(el) => galleryImages.current.push(el!)}
							key={item.title}
							style={{
								backgroundImage: `url(${item.image})`,
							}}>
							<h2 className='scroll_nav_images_text'>
								{item.title}
							</h2>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ScrollNavImages;
