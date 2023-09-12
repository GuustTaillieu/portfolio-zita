import { motion } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
			transition={{ duration: 0.3 }}>
			{children}
		</motion.div>
	);
};

export { PageTransition };
