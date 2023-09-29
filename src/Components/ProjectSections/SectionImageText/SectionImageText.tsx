import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionImageText.scss';

type Props = {
	title?: string;
	image: string;
	text: string;
	textFirst?: boolean;
};

const SectionImageText = ({ title, image, text, textFirst }: Props) => {
	return (
		<motion.div
			className='project_section'
			data-type='image_text'
			style={{ flexDirection: textFirst ? 'row-reverse' : 'row' }}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				staggerChildren: 0.5,
				delayChildren: 0.5,
			}}>
			<motion.img
				src={image}
				alt={title ?? 'project image'}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
			/>
			<motion.div
				className='project_section_text'
				style={{ textAlign: textFirst ? 'right' : 'left' }}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}>
				<h3>{title}</h3>
				<p>{text}</p>
			</motion.div>
		</motion.div>
	);
};

export default SectionImageText;
