import './TopNav.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { useDeviceSelectors } from 'react-device-detect';

type Props = {};

const Navigation = (props: Props) => {
	const [{ isMobile, isTablet }, data] = useDeviceSelectors(
		window.navigator.userAgent
	);
	return (
		<motion.nav
			className={'navigation' + (isMobile && !isTablet ? ' mobile' : '')}
			variants={anims.navigationAnim}
			initial='initial'
			animate='animate'
			exit='exit'
			layoutId='navigation'
			transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}>
			<Link to='/'>
				<h1>Zita Worm</h1>
			</Link>
			<Link to='/contact'>
				<h2>Contact</h2>
			</Link>
		</motion.nav>
	);
};

export default Navigation;
