import React, { useEffect, useRef } from 'react';
import './ScrollNavImages.scss';
import SCROLL_NAV_ITEMS from '../scroll-nav-info';
import { useDeviceSelectors } from 'react-device-detect';

type Props = {
	scrollPosition: number;
	handleOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ScrollNavImages = ({ scrollPosition, handleOnClick }: Props) => {
	const galleryImagesContainer = useRef<HTMLDivElement>(null);
	const galleryImages = useRef<HTMLDivElement[]>([]);
	const [{ isMobile }, data] = useDeviceSelectors(window.navigator.userAgent);

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
					SCROLL_NAV_ITEMS.toSorted().map((item) => (
						<div
							onClick={handleOnClick}
							className='scroll_nav_images_in'
							ref={(el) => galleryImages.current.push(el!)}
							key={item.title}
							style={{
								backgroundImage: `image-set(url(${item.imageSet[0]}), url(${item.imageSet[1]}) 2x)`,
							}}
							data-cursor-text='Click or Scroll'>
							{isMobile && (
								<h2 className='scroll_nav_images_text'>
									{item.title}
								</h2>
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ScrollNavImages;
