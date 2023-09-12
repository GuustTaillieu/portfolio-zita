import { motion } from 'framer-motion';
import './styles/transitions.scss';

const defaultPageTransition = (OgComponent: any) => {
	return () => (
		<motion.div
			className='default-page-transition'
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.3 }}>
			<OgComponent />
		</motion.div>
	);
};

export { defaultPageTransition };
