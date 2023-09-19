import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ScrollNav.scss';
import ScrollNavText from './ScrollNavText/ScrollNavText';
import ScrollNavImages from './ScrollNavImages/ScrollNavImages';
import { scrollNavSlideLeftAnim } from '../../animations';

type Props = {};

const ScrollNav = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [lastTime, setLastTime] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

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
	}

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.type === 'click') {
			setIsAnimating(!isAnimating);
		}
	};

	return (
		<motion.div
			className='scroll_nav'
			initial='initial'
			transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
			animate={isAnimating ? 'animate' : 'initial'}
			variants={scrollNavSlideLeftAnim}>
			<ScrollNavText
				scrollPosition={scrollPosition}
				handleOnClick={handleClick}
			/>
			<ScrollNavImages
				scrollPosition={scrollPosition}
				handleOnClick={handleClick}
			/>
		</motion.div>
	);
};

export default ScrollNav;
