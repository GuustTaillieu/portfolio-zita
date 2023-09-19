import { motion } from 'framer-motion';
import anims from './animations';

const DefaultPageTransition = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			variants={anims.defaultPageTransition}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.3 }}>
			{children}
		</motion.div>
	);
};

export { DefaultPageTransition };
