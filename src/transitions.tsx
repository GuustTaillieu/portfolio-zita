import { motion } from 'framer-motion';
import './styles/transitions.scss';

const DefaultPageTransition = (
	OgComponent: (props: any) => JSX.Element
): JSX.Element => {
	return (
		<>
			<OgComponent />
			<motion.div
				key={OgComponent.name + '-in'}
				className='page-transition-in'
				initial={{ scaleY: 0 }}
				whileInView={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				viewport={{ once: true, amount: 'some' }}
				transition={{ duration: 0.5 }}
			/>
			<motion.div
				key={OgComponent.name + '-out'}
				className='page-transition-out'
				initial={{ scaleY: 1 }}
				whileInView={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				viewport={{ amount: 'some' }}
				transition={{ duration: 0.5 }}
			/>
		</>
	);
};

const invertedPages: (string | RegExp)[] = ['/projects', /\/projects\/\d/i];
const isInverted = (locationPath: string) => {
	return invertedPages.some((page) => {
		if (typeof page === 'string') return locationPath === page;
		else return page.test(locationPath);
	})
		? ' inverted'
		: '';
};

export { DefaultPageTransition, isInverted };
