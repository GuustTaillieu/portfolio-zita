import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ScrollNav.scss';
import ScrollNavText from './ScrollNavText/ScrollNavText';
import ScrollNavImages from './ScrollNavImages/ScrollNavImages';
import anims from '../../animations';
import useSection from '../../hooks/useSection';

export const ANIMATION_DURATION = 600;
type Props = { isDocked: boolean; setIsDocked: (isDocked: boolean) => void };

const ScrollNav = ({ isDocked, setIsDocked }: Props) => {
	const { scrollPosition, setScrollPosition } = useSection();
	const [lastTime, setLastTime] = useState(0);

	useEffect(() => {
		window.addEventListener('wheel', scrollGallery);
		return () => {
			window.removeEventListener('wheel', scrollGallery);
		};
	}, [scrollPosition, lastTime]);

	function scrollGallery(e: WheelEvent) {
		if (e.timeStamp - lastTime < ANIMATION_DURATION) return;
		setLastTime(e.timeStamp);
		const scrollDirection = e.deltaY > 0 ? 1 : -1;
		const nextScrollPosition = scrollPosition + scrollDirection;
		setScrollPosition(nextScrollPosition);
	}

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.type === 'click') {
			setIsDocked(!isDocked);
		}
	};

	return (
		<motion.div
			className='scroll_nav'
			variants={anims.scrollNavSlideLeftAnim}
			initial='initial'
			animate={isDocked ? 'animate' : 'initial'}>
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
