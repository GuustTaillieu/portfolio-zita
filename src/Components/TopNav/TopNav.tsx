import './TopNav.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import anims from '../../animations';

type Props = {};

const Navigation = (props: Props) => {
	return (
		<motion.nav
			variants={anims.navigationAnim}
			initial='initial'
			animate='animate'
			exit='exit'
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
