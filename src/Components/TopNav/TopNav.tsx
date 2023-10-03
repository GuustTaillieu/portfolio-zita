import './TopNav.scss';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { useDeviceSelectors } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import cursor from '../../customCursor';
import { isInverted } from '../../transitions';

const Navigation = () => {
	const [{ isMobile, isTablet }] = useDeviceSelectors(
		window.navigator.userAgent
	);
	const stickeyElems = useRef<HTMLAnchorElement[]>([]);
	const location = useLocation();

	useEffect(() => {
		stickeyElems.current.forEach((el) => {
			el.addEventListener('mouseenter', () => {
				cursor.setStick(el);
			});

			el.addEventListener('mouseleave', () => {
				cursor.removeStick();
			});
		});
	}, []);

	return (
		<motion.nav
			className={'navigation' + (isMobile && !isTablet ? ' mobile' : '')}
			variants={anims.navigationAnim}
			initial='initial'
			animate='animate'
			exit='exit'
			layoutId='navigation'
			transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}>
			<Link to='/' ref={(el) => stickeyElems.current.push(el!)}>
				<h1 className={isInverted(location.pathname)}>Zita Worm</h1>
			</Link>
			<Link to='/contact' ref={(el) => stickeyElems.current.push(el!)}>
				<h2 className={isInverted(location.pathname)}>Contact</h2>
			</Link>
		</motion.nav>
	);
};

export default Navigation;
