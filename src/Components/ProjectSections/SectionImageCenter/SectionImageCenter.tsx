import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionImageCenter.scss';

type Props = {
	imageSet: string[];
};

const SectionImageCenter = ({ imageSet }: Props) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		smooth: 0.5,
		offset: ['start end', 'end end'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.div
			ref={ref}
			className='project_section'
			data-type='image_center'
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				staggerChildren: 0.5,
				delayChildren: 0.5,
			}}>
			<motion.img
				data-cursor='-exclusion'
				loading='lazy'
				src={imageSet[0]}
				srcSet={`${imageSet[0]} 1x, ${imageSet[1]} 2x`}
				alt={'project image'}
				style={{ opacity }}
				viewport={{ once: true, amount: 1 }}
			/>
		</motion.div>
	);
};

export default SectionImageCenter;
